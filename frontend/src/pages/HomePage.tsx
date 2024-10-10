import landingImage from "../assets/Landing.png";
import appDownloadImage from "../assets/appDownload.png";

const HomePage = () => {

    return (
        <div className="flex flex-col gap-12">
          <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-violet-600">
              Order to campus today!
            </h1>
            <span className="text-xl">Food is just a click away!</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage}/>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3x1 trackig-tighter">
                        Order takeaway even faster!
                    </span>
                    <span>
                        Download UrOrder app now 
                    </span>
                        <img src={appDownloadImage} />
                </div>
            </div>
        </div>
    );
};

export default HomePage;