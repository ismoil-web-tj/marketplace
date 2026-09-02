import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cftwlegcmpupmgfsafzg.supabase.co'
const supabaseAnonKey = 'sb_publishable_0QagE1zP0yUQbj5MLKprSw_0gWFlT5A'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)