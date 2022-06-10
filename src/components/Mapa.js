export default function Mapa(){
    return (
    <div className = "mapa">
        <iframe 
        title= "mapa"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d74351.23101126155!2d-58.43204101120412!3d-34.55630933594325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1654895128266!5m2!1ses-419!2sar" 
        width="1600" 
        height="750"
        style={{border:0}}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
         </div>    
    );
}