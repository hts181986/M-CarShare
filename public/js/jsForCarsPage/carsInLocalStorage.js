$(document).ready(function () {
    /*this first thing has nothing todo with cars in local storage
    its to change the status bar in case user comes from home page
    */
    if (localStorage.getItem("bookingDetails") !== null) {
        var bookingDetailsArr = JSON.parse(localStorage.getItem("bookingDetails"));
        if (bookingDetailsArr !== undefined) {
            $("#status").hide();
            $("#statusIfClientCameFromHomePage").show();
        }
    }
    if (localStorage.getItem("allCarsMaxDetails") == null) {
        function createLocalStorageWithCars(arrayWithCars) {
            var arrayInString = JSON.stringify(arrayWithCars);
            localStorage.setItem("allCarsMaxDetails", arrayInString);
        }
        /*arrays with all cars*/
        var arrayOfAllCarsMaxDetails = [];

        function CarDetails(carClass, name, model, carNumber, year, gear, price, imgUrl) {
            this.carClass = carClass;
            this.name = name;
            this.model = model;
            this.carNumber = carNumber;
            this.year = year;
            this.gear = gear;
            this.price = price;
            this.imgUrl = imgUrl;
        }

        function putCarObjIntoArr(carObj) {
            arrayOfAllCarsMaxDetails.push(carObj);
        }
        /*MINI*/
        /*mini  audi a1*/
        var audiA1_Obj = new CarDetails("Mini", "Audi", "A1", "3223231", 2014, "manual", 19, "http://cdn2.autoexpress.co.uk/sites/autoexpressuk/files/styles/article_main_image/public/1/59/audi-a1-black-edition-front_0.jpg?itok=2SQlZ_Wl");
        putCarObjIntoArr(audiA1_Obj);
        /*mini  smart*/
        var smartPassion_Obj = new CarDetails("Mini", "Smart", "passion", "7542231", 2015, "automatic", 12, "http://image.dieselpowermag.com/f/tech/9748808+w799+h499+cr1+ar0/0605dp_z%2Beuro_diesel_car%2Bside_view.jpg");
        putCarObjIntoArr(smartPassion_Obj);
        /*mini mini cooper 16*/
        var miniCooper_Obj = new CarDetails("Mini", "Mini", "Cooper 16", "7536386", 2014, "manual", 18, "http://www.motor.es/fotos-noticias/2011/06/mini-cooper-equipe-40-unidades-preparadas-por-arden-2157_2.jpg");
        putCarObjIntoArr(miniCooper_Obj);
        /*mini toyota yaris*/
        var toyotaYaris_Obj = new CarDetails("Mini", "Toyota", "Yaris", "7575376", 2014, "automatic", 16, "http://dddn.vcmedia.vn/aTI11wIjfT630G9zB86EKh13MKd3w/Image/2014/06/Toyota-Yaris-01-0f3bd.JPG");
        putCarObjIntoArr(toyotaYaris_Obj);

        /*FULL SIZE*/
        /*full size toyota camery*/
        var toyotaCamery_Obj = new CarDetails("FullSize", "Toyota", "Camry", "5333164", 2014, "automatic", 30, "http://carimages.org/car/styles/1366x768/public/toyota-camry-2016_0.jpg?itok=wDDMYIE-");
        putCarObjIntoArr(toyotaCamery_Obj);
        /*full size honda acord*/
        var hondaAccord_Obj = new CarDetails("FullSize", "Honda", "Accord", "3534133", 2014, "automatic", 30, "http://autotextbook.ru/wp-content/uploads/2014/09/Perfect-Style-And-Perfect-Shape-Of-Honda-Accord-2014.jpg");
        putCarObjIntoArr(hondaAccord_Obj);
        /*full size mazda 6*/
        var mazda6_Obj = new CarDetails("FullSize", "Mazda", "6", "1566163", 2014, "manual", 29, "http://www.blogcdn.com/slideshows/images/slides/282/041/7/S2820417/slug/l/03-2014-mazda6-lt-1.jpg");
        putCarObjIntoArr(mazda6_Obj);
        /*full size ford fusion*/
        var fordFusion_Obj = new CarDetails("FullSize", "Ford", "Fusion", "3534154", 2015, "manual", 30, "http://carakoom.com/data/blogs/group/c69d31396ac2ea39bf4b8bff05b33073/16069/image/5.jpg");
        putCarObjIntoArr(fordFusion_Obj);

        /*SUV*/
        /*suv  acrua*/
        var acuraMdx_Obj = new CarDetails("SUV", "Acura", "MDX", "435332", 2015, "automatic", 29, "http://www.inautonews.com/wp-content/uploads/yapb_cache/2014_acura_mdx_production.e2fgp2mbwkoos8080k8swskgw.a5fuq7lrqzkgc0ccw4ss08gso.th.jpeg");
        putCarObjIntoArr(acuraMdx_Obj);
        /*suv chevrolet*/
        var chevroletSuburban_Obj = new CarDetails("SUV", "Chevrolet", "Suburban", "1242312", 2014, "automatic", 29, "http://www.onlydrivegreen.com/listings/2009_Chevrolet_Suburban_SUV.jpg");
        putCarObjIntoArr(chevroletSuburban_Obj);
        /*suv madzda*/
        var mazdaCt5_Obj = new CarDetails("SUV", "Mazda", "CX5", "7735484", 2015, "automatic", 27, "http://www.themotorreport.com.au/content/image/0/1/01_mazda_minagi_concept_01-4d6cc51e5057d-935x595.jpg");
        putCarObjIntoArr(mazdaCt5_Obj);
        /*suv jaguar*/
        var jaguarCX17_Obj = new CarDetails("SUV", "Jaguar", "CX17", "1533183", 2014, "manual", 49, "http://www.sunshineautomotive.com.au/sites/sunshineautomotive.com.au/files/Jag-c17.png");
        putCarObjIntoArr(jaguarCX17_Obj);

        /*LUXARY SIZE*/
        /*Luxary mercedes benz s 600*/
        var mbS600_Obj = new CarDetails("Luxury", "Mercedes Benz", "S600", "5323424", 2015, "automatic", 99, "http://storage0.dms.mpinteractiv.ro/media/2/41/1823/13728279/16/005-mercedes-maybach-01.jpg?width=867&height=550");
        putCarObjIntoArr(mbS600_Obj);
        /*Luxary lexus lh600*/
        var lexusLh600_Obj = new CarDetails("Luxury", "Lexus", "lh600", "5323164", 2014, "automatic", 89, "http://i.kinja-img.com/gawker-media/image/upload/s--z2a5dmBV--/otkgxrofqg6h6ughowwi.png");
        putCarObjIntoArr(lexusLh600_Obj);
        /*Luxary BMW 7*/
        var bmw700l_Obj = new CarDetails("Luxury", "BMW", "700l", "2323264", 2014, "automatic", 95, "http://performancedrive.com.au/wp-content/uploads/2014/04/BMW-Vision-Future-Concept.jpg");
        putCarObjIntoArr(bmw700l_Obj);
        /*Luxary audi a8l*/
        var audiA8l_Obj = new CarDetails("Luxury", "Audi", "A9l", "7343164", 2015, "automatic", 109, "http://reviewcars2015.com/wp-content/uploads/2014/08/2015-Audi-A8-release-Pictures.jpg");
        putCarObjIntoArr(audiA8l_Obj);

        createLocalStorageWithCars(arrayOfAllCarsMaxDetails);

    }
});
