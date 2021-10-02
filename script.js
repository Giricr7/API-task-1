
    //fetching the api data
    var url='https://dog.ceo/api/breeds/image/random'
    fetchData = async () => {
        
        try {
            jsdata = await fetch(url);
        convertedData = await jsdata.json();
       
        
        return convertedData
        } catch(err) {
            console.error(err);
        }
    }
    

    
    // main function
    async function start () {
        let image_details = await fetchData();
        document.getElementById('image').setAttribute('src', image_details.message)
    }

    //program execution starts here
    start();


    //reloading a new image
    function setnewimage(){
        
        location.reload()
        }
