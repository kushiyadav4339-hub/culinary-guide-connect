CREATE TABLE public.contact_requests (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), name text NOT NULL, email text NOT NULL, topic text NOT NULL, message text NOT NULL, created_at timestamptz NOT NULL DEFAULT now());
GRANT ALL ON public.contact_requests TO service_role;
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;
CREATE INDEX contact_requests_email_created_idx ON public.contact_requests(email, created_at);
CREATE FUNCTION public.submit_contact_request(p_name text, p_email text, p_topic text, p_message text) RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE request_id uuid;
BEGIN
IF length(trim(p_name)) NOT BETWEEN 2 AND 100 OR length(p_email) > 254 OR p_email !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$' OR p_topic NOT IN ('Programs','Platform','Payouts','General') OR length(trim(p_message)) NOT BETWEEN 20 AND 3000 THEN RAISE EXCEPTION 'Please check your contact details.'; END IF;
PERFORM pg_advisory_xact_lock(hashtextextended(lower(trim(p_email)), 0));
IF (SELECT count(*) FROM public.contact_requests WHERE email = lower(trim(p_email)) AND created_at > now() - interval '1 hour') >= 3 THEN RAISE EXCEPTION 'Too many requests. Please try again later.'; END IF;
INSERT INTO public.contact_requests(name,email,topic,message) VALUES(trim(p_name),lower(trim(p_email)),p_topic,trim(p_message)) RETURNING id INTO request_id;
RETURN request_id;
END; $$;
REVOKE ALL ON FUNCTION public.submit_contact_request(text,text,text,text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.submit_contact_request(text,text,text,text) TO anon, authenticated;