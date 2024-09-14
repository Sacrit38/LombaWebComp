import { useMediaQuery } from "@uidotdev/usehooks";
import { Card } from 'primereact/card';

const Feature =()=>{
    const isSmallDevice = useMediaQuery("only screen and (max-width : 811px)");
    return(
        <>
            {
            isSmallDevice&&
            <div className='w-[100vw] min-h-[60vh] bg-white mt-5 p-10'>
                <div className="flex gap-2" data-aos="fade-up">
                    <h1 className='text-center text-blue-400' >
                        Our
                    </h1>
                    <h1>
                        Feature
                    </h1>

                </div>

                <div className='mt-10 flex flex-col  gap-5'>
                    <Card  title={<h3 className='text-black '>Bayar Kapan Saja</h3>} className='w-100 bg-blue-300 text-black shadow-xl rounded-lg' data-aos="fade-right">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis in nesciunt unde doloremque nobis ea architecto consequuntur impedit minima incidunt perferendis, eum iure voluptas dicta sit expedita, dolores optio officiis.
                        </p>
                    </Card>
                    <Card title={<h3 className='text-black '>Beli Dimana Saja</h3>} className='w-100 bg-blue-300 text-black  shadow-xl rounded-lg' data-aos="fade-left">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis in nesciunt unde doloremque nobis ea architecto consequuntur impedit minima incidunt perferendis, eum iure voluptas dicta sit expedita, dolores optio officiis.
                        </p>
                    </Card>
                    <Card title={<h3 className='text-black '>Layanan Cepat</h3>} className='w-100 bg-blue-300 text-black  shadow-xl rounded-lg' data-aos="fade-right">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis in nesciunt unde doloremque nobis ea architecto consequuntur impedit minima incidunt perferendis, eum iure voluptas dicta sit expedita, dolores optio officiis.
                        </p>
                    </Card>
                </div>
            </div>
        }
        {!isSmallDevice &&
            <div className='w-[100vw] min-h-[60vh] bg-white mt-5 p-20'>
                <div className="flex gap-2 justify-center"  data-aos="fade-up">
                    <h1 className='text-center text-blue-400'>
                        Our
                    </h1>
                    <h1>
                        Feature
                    </h1>

                </div>
                <div className='mt-10 flex gap-5'>
                    <Card  title={<h3 className='text-black '>Bayar Kapan Saja</h3>} className='w-1/3 bg-blue-300 text-black  shadow-xl rounded-lg ' data-aos="fade-right">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis in nesciunt unde doloremque nobis ea architecto consequuntur impedit minima incidunt perferendis, eum iure voluptas dicta sit expedita, dolores optio officiis.
                        </p>
                    </Card>
                    <Card title={<h3 className='text-black '>Beli Dimana Saja</h3>} className='w-1/3 bg-blue-300 text-black  shadow-xl rounded-lg' data-aos="fade-up">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis in nesciunt unde doloremque nobis ea architecto consequuntur impedit minima incidunt perferendis, eum iure voluptas dicta sit expedita, dolores optio officiis.
                        </p>
                    </Card>
                    <Card title={<h3 className='text-black '>Layanan Cepat</h3>} className='w-1/3 bg-blue-300 text-black  shadow-xl rounded-lg' data-aos="fade-left">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis in nesciunt unde doloremque nobis ea architecto consequuntur impedit minima incidunt perferendis, eum iure voluptas dicta sit expedita, dolores optio officiis.
                        </p>
                    </Card>
                </div>
            </div>
        }
        </>

    )
}
export default Feature
