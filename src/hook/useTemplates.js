import { useQuery } from "react-query"
import { toast } from "react-toastify";
import { getTemplates } from "../api";

const useTemplate = () => {
    const { data, isLoading, isError, refetch } = useQuery(
        "templates",
        async () => {
            try {
                const templates = await getTemplates();
                console.log("templates", templates);
                return templates;
            } catch (err) {
                console.log(err)
                toast.error('something went wrong')
            }
        },
        { refetchOnWindowFocus: false }
    );
    return { data, isLoading, isError, refetch }

};
export default useTemplate;