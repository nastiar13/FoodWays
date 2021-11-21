import style from './AddProduct.module.css'



    
function AddProduct() {
    
    return (
        <div className={style.addProduct}>
            <h1 style={{fontFamily: "Abhaya Libre", marginBottom: "2rem", marginLeft: "2rem", fontWeight: "800"}}>Add Product</h1>
            <div className={style.form}>
                <input className={style.title} style={{display: "inline", width: "83%"}} type="text" placeholder="Title" name="" id="" />
                <div className={style.img}>
                    <label style={{color: "#766C6C"}} htmlFor="img">Attach Image <img style={{position: "relative", zIndex: "-1",marginLeft: "2rem", height: "25px", top: "7px"}} src="/icon/Frame.svg" alt="" /></label>
                </div>
                <input style={{display: "none"}} type="file" id="img"/>
                <input className={style.price} style={{display: "block"}} type="text" placeholder="Price" />
                <button className={style.save}>Save</button>
            </div>
            
        </div>
    )
}

export default AddProduct
