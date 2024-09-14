import { Avatar } from "primereact/avatar";
import { Card } from "primereact/card";
import NavbarMain from "../Products/components/NavbarMain";
const Account = () => {
  return (
    <>
      <NavbarMain />
      <div className="w-[100vw] px-[10vw] py-[15vh] bg-slate-50">
        <div className="flex gap-3">
          <a className="text-blue-700 border-5 p-2 border-solid border-t-0 border-l-0 border-r-0 ">
            For You
          </a>
          <a className="p-2">New To Bizcat</a>
        </div>
        <div className="flex gap-10 mt-10">
          <Card
            className="w-[33%] rounded-xl shadow-xl"
            header={
              <div className="bg-gray-50">
                <div className="p-3 flex gap-4">
                  <Avatar label="R" shape="circle" size="xlarge" />
                  <div className="flex flex-col">
                    <h3>Lorem ipsum dolor </h3>
                    <p className="text-xs"><a href="#">Jawa Barat, Kota Bandung</a></p>
                    <p className="text-xs">+62 85 3123 8527</p>
                  </div>
                </div>
              </div>
            }
          >
            <img src="https://primefaces.org/cdn/primereact/images/usercard.png" />
            <div className="flex gap-3 mt-2 items-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, non tenetur nihil quidem similique mollitia
                perferendis optio adipisci ipsam dolorum iure, beatae iusto!
                Nulla, adipisci omnis id harum possimus eum.
              </p>
            </div>
          </Card>
          <Card
            className="w-[33%] rounded-xl shadow-xl"
            header={
              <div className="bg-gray-50">
                <div className="p-3 flex gap-4">
                  <Avatar label="R" shape="circle" size="xlarge" />
                  <div className="flex flex-col">
                    <h3>Lorem ipsum dolor </h3>
                    <p className="text-xs text-blue-500">Jawa Barat, Kota Bandung</p>
                    <p className="text-xs">+62 85 3123 8527</p>
                  </div>
                </div>
              </div>
            }
          >
            <img src="https://primefaces.org/cdn/primereact/images/usercard.png" />
            <div className="flex gap-3 mt-2 items-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, non tenetur nihil quidem similique mollitia
                perferendis optio adipisci ipsam dolorum iure, beatae iusto!
                Nulla, adipisci omnis id harum possimus eum.
              </p>
            </div>
          </Card>
          <Card
            className="w-[33%] rounded-xl shadow-xl"
            header={
              <div className="bg-gray-50">
                <div className="p-3 flex gap-4">
                  <Avatar label="R" shape="circle" size="xlarge" />
                  <div className="flex flex-col">
                    <h3>Lorem ipsum dolor </h3>
                    <p className="text-xs"><a href="#">Jawa Barat, Kota Bandung</a></p>
                    <p className="text-xs">+62 85 3123 8527</p>
                  </div>
                </div>
              </div>
            }
          >
            <img src="https://primefaces.org/cdn/primereact/images/usercard.png" />
            <div className="flex gap-3 mt-2 items-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, non tenetur nihil quidem similique mollitia
                perferendis optio adipisci ipsam dolorum iure, beatae iusto!
                Nulla, adipisci omnis id harum possimus eum.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};
export default Account;
