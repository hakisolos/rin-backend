import { createClient } from "@supabase/supabase-js";
const DBURL = "https://ndiyexvxkhqorptvwtea.supabase.co"
const anon = "AiillNkJxNrhnIby2ez/BJT9J/eCgMWsucEHT2Tug56wyMarRFPqPIoB2OARXAUDqTIMP2SP09rbasQAaNzJVw=="
export const db = createClient(DBURL, anon)