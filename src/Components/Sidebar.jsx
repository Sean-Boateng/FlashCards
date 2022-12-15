
const Sidebar = (props) => {


    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Collections</th>
                    </tr>
                </thead>

                <tbody>
                    {props.collection.map((collection)=>{
                        return(
                            <tr onClick={()=>{props.collectionItems(collection.id)}}>
                                <td>                                
                                    {collection.id} {collection.title}                                                           
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            
        </div>
     );


}
export default Sidebar;