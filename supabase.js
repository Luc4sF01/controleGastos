import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"

const supabaseUrl = "https://vxgzjpqrfqxunnlyuxza.supabase.co"

const supabaseKey = "sb_publishable_vz-zFhWcp-Rz2EbSAmaY7A_RRx0D-w7"

export const supabase = createClient(supabaseUrl, supabaseKey)