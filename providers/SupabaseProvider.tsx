import { PropsWithChildren, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { Database } from "@/types_db";

type SupabaseProviderProps = {

};

export const SupabaseProvider: React.FC<PropsWithChildren<SupabaseProviderProps>> = ({ children }) => {
    const [supabaseClient] = useState(() => createClientComponentClient<Database>());

    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    );
};
