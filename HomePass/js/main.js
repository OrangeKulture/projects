$(document).ready(function(){

    getHouses = () => {
        const numHouses = 80;
        for(let i=1;i<=numHouses;i++){
            $('.home-list').append(`
                <div class="house-card">
                    <p>${i}</p>
                </div>
                `)
        }
    }

    getHouses();
});