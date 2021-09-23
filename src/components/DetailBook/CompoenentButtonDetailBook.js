import { motion } from "framer-motion";

import { useHistory } from "react-router-dom";

export default function ComponentButtonDetailBook(){

    let history = useHistory();

    const redirectToProfile = () => history.push("/profile");
    const redirectToReadBook = () => history.push("/read-book");


    return(

        <>
           <div className="mt-4 d-flex justify-content-end">
                <motion.a onClick={redirectToProfile}  whileHover={{scale:1.1}} transition={{type:"spring",stiffness : 600}} className="btn btn-danger mx-4">
                    Add My List <i class='bx bxs-bookmark' ></i>
                </motion.a>
                <motion.a onClick={redirectToReadBook}  whileHover={{scale:1.1}} transition={{type:"spring",stiffness : 600}} className="btn btn-secondary">
                    Read Book <i class='bx bx-right-arrow-alt'></i>
                </motion.a>
           </div>
        </>

    )

}