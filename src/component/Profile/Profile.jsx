import { Link } from 'react-router-dom'
import style from './Profile.module.css'
import { useParams } from 'react-router'

const userList = [
    {
        id: 1,
        title: "My Profile",
        transaction: "History Transaction",
        label: "Full Name",
        name: "Andi",
        img: "/img/user-pict.png",
        email: "andigans@gmail.com",
        phone: "083896833122",
        path: "",
        history: {
            from: "Geprek Bensu"
        }
    },
    {
        id: 2,
        title: "Profile Patner",
        transaction: "History Order",
        name: "Geprek Bensu",
        label: "Patner's Name",
        img: "/img/1.png",
        email: "bensu@gmail.com",
        phone: "083896833122",
        path: "",
        history: {
            from: "Andi"
        }
    }
]

export default function Profile() {
    const {id} = useParams()
    const user = userList.find(a => a.id == id)
    return(
        <div className={style.profileContainer}>
            <div className={style.left}>
                <h1 style={{marginBottom: "2rem"}}>{user.title}</h1>
                <div className={style.flexProfile}>
                    <div className={style.leftItem}>
                        <img style={{display: "block",width: "180px", height: "220px",objectFit: "cover"}} src={user.img} />
                        <Link to={`/edit-profile/${id}`} style={{textDecoration: "none", color: "black"}}><button className={style.editProfile}>Edit Profile</button></Link>
                    </div>
                    <div className={style.rightItem}>
                        <div className={style.list}>
                            <h4 style={{color: "#613D2B"}}>{user.label}</h4>
                            <p>{user.name}</p>
                        </div>
                        <div className={style.list}>
                            <h4 style={{color: "#613D2B"}}>Email</h4>
                            <p>{user.email}</p>
                        </div>
                        <div className={style.list}>
                            <h4 style={{color: "#613D2B"}}>Phone</h4>
                            <p>{user.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.right}>
                <h1 style={{marginBottom: "2rem"}}>{user.transaction}</h1>
                <div className={style.historyList}>
                    <div className={style.historyLeft}>
                        <h5 style={{fontSize: "14px"}}>{user.history.from }</h5>
                        <p><b>Saturday</b>, 12 March 2021</p>
                        <p style={{color: "#974A4A"}}>Total : Rp 45.000</p>
                    </div>
                    <div className={style.historyRight}>
                        <div className={style.flexItem}>
                            <p className={style.textLogo}>WaysFood</p>
                            <img  src="/icon/logo1.svg" alt="" />
                        </div>
                        <div className={style.finish}>
                            <p style={{color: "#00FF47"}}>Finished</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}