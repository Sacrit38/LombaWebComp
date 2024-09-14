import axios from "axios";
import { Avatar } from "primereact/avatar";
import { Card } from "primereact/card";
import { useEffect, useState } from "react";
import NavbarMain from "../Products/components/NavbarMain";

const Company=()=>{
        const [data, setData] = useState([]);
        const [searchTerm, setSearchTerm] = useState("");
        const [cat,setCat]=useState()
        const getData = async () => {
            let api = await axios.get("http://127.0.0.1:8000/company");
            setData(api.data);
        };

        useEffect(() => {
            getData();
        }, []);

        // Filter products based on search term
        const filteredData = data.filter((item) =>
            item.nama_produk.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
            <>
                <NavbarMain home={false} product={false} company={true} event={false} cari={(e) => setSearchTerm(e.target.value)}/>
                <div className="w-[100vw] px-[10vw] py-[23vh]">
                    <div className="flex gap-3">
                        <a className="text-blue-700 border-5 p-2 border-solid border-t-0 border-l-0 border-r-0">
                            For You
                        </a>
                        <a className="p-2">New To Bizcat</a>
                    </div>


                    {/* Display Filtered Products */}
                    <div className="flex gap-10 mt-10 flex-wrap">
                        {filteredData.length > 0 ? (
                            filteredData.map((items) => {
                                return (
                                    <Card
                                        key={items.id}
                                        className="w-[30%]"
                                        header={<img className="w-full h-[30vh]" src={items.gambar_produk} alt="Product" />}
                                    >
                                        <h3>{items.nama_produk}</h3>
                                        <div className="flex gap-3 mt-2 items-center">
                                            <Avatar label="R" shape="circle" />
                                            <p>Rifki rizz</p>
                                        </div>
                                    </Card>
                                );
                            })
                        ) : (
                            <p>No products found</p>
                        )}
                    </div>
                </div>
            </>

    )
}
export default Company
