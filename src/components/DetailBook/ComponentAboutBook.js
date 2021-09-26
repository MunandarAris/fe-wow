import { useParams } from 'react-router-dom';

import fakeData from "../../fakeData/bookLists";

export default function ComponentAboutBook(){

    let about = "";

    let { id } = useParams();

    for(let data of fakeData)
    {
        if(data.id == id)
        {
            about = data.about;
        }
    }

    return(

        <>
           <div>
                <h1 className="mt-5 mb-4">About This Book</h1>
                <p className="text-muted lh-lg">
                    {about}
                </p>
           </div>
        </>

    )

}