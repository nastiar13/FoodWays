import style from './Admin.module.css'

function Admin() {
    return (
        <div className={style.adminContainer}>
            <h1 style={{fontFamily: "'Abhaya Libre'", fontWeight: "800", fontSize: "36px", marginBottom: "3rem"}}>Income Trancsaction</h1>
            <table className={style.table}>
                <thead>
                    <th className={style.th}>No</th>
                    <th className={style.th}>Name</th>
                    <th className={style.th}>Address</th>
                    <th className={style.th}>Products Order</th>
                    <th className={style.th}>Status</th>
                    <th className={style.th}>Action</th>
                </thead>
                <tr>
                    <td className={style.td}>1</td>
                    <td className={style.td}>Sugeng No Pants</td>
                    <td className={style.td}>Ciluengsi</td>
                    <td className={style.td}>Paket Geprek, Paket Ke..</td>
                    <td style={{color: "#FF9900"}} className={style.td}>Waiting Approve</td>
                    <td className={style.td}>
                        <button className={style.btnCancel}>Cancel</button>
                        <button className={style.btnApprove}>Approve</button>
                    </td>
                </tr>
                <tr>
                    <td className={style.td}>2</td>
                    <td className={style.td}>Haris Gams</td>
                    <td className={style.td}>Serang</td>
                    <td className={style.td}>Paket Geprek, Paket Ke..</td>
                    <td style={{color: "#78A85A"}} className={style.td}>Success</td>
                    <td style={{textAlign: "center"}} className={style.td}>
                        <img src="/img/Groupsuccess.svg" alt="" />

                    </td>
                </tr>
                <tr>
                    <td className={style.td}>3</td>
                    <td className={style.td}>Aziz Union</td>
                    <td className={style.td}>Bekasi</td>
                    <td className={style.td}>Paket Geprek, Paket Ke..</td>
                    <td style={{color: "#E83939"}} className={style.td}>Cancel</td>
                    <td style={{textAlign: "center"}} className={style.td}>
                    <img src="/img/cancel.svg" alt="" />
                        
                    </td>
                </tr>
                <tr>
                    <td className={style.td}>4</td>
                    <td className={style.td}>Lae Tanjung Balai</td>
                    <td className={style.td}>Tanjung Balai</td>
                    <td className={style.td}>Paket Geprek, Paket Ke..</td>
                    <td style={{color: "#00D1FF"}} className={style.td}>On The Way</td>
                    <td style={{textAlign: "center"}} className={style.td}>
                        <img src="/img/Groupsuccess.svg" alt="" />
                    </td>
                </tr>
                
            </table>
        </div>
    )
}

export default Admin
