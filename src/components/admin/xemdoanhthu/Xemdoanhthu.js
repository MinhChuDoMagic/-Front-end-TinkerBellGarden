import React ,{ useState} from 'react';
import { Table } from 'react-bootstrap';
import './Xemdoanhthu.css'

export default function Xemdoanhthu() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [canSee, setCanSee] = useState(false);
    const [curStartDate, setCurStartDate] = useState("");
    const [curEndDate, setCurEndDate] = useState("");
    const [dataDoanhThu, setDataDoanhThu] = useState([
        {
            id: 1,
            ten: "abc",
            sl: 10,
            tien: 3000
        },
        {
            id: 1,
            ten: "abc",
            sl: 10,
            tien: 3000
        },
        {
            id: 1,
            ten: "abc",
            sl: 10,
            tien: 3000
        }
    ])

    let total=0;
    const handleSubmit=()=>{
        if(startDate.length!==0&&endDate.length!==0){
            setCurStartDate(startDate);
            setCurEndDate(endDate);          
            setCanSee(true);
            //call api o day
        }
        else{        
            setCanSee(false);
            alert("chon du ngay");
        }
        
    }
    return (
        <div className='xdt_ctn'>
            <div className='heading'>Thống kê doanh thu</div>
            <div className='inputdate'>
                <div className='input_ctn'>
                <div className='input'>
                    <label>Ngày bắt đầu: </label>
                    <input type={'date'} onChange={(e)=>setStartDate(e.target.value)}/>
                </div>
                <div className='input'>
                    <label>Ngày kết thúc: </label>
                    <input type={'date'} onChange={(e)=>setEndDate(e.target.value)}/>
                </div>
                </div>
                
                <div 
                    className='submit'
                    onClick={()=>handleSubmit()}
                >
                    <button>Xác nhận</button>
                </div>
            </div>
            <div className={`output${canSee?'':' hideoutput'}`} >
                <div className='head'>Thống kê từ ngày {curStartDate} đến {curEndDate} </div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Loại vé</th>
                            <th>Số lượng</th>
                            <th>Số tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataDoanhThu.map(data=>{
                            total+=data.tien;
                            return(
                                <tr key={data.id}>
                                    <th>{data.ten}</th>
                                    <th>{data.sl}</th>
                                    <th>{data.tien}</th>
                                    <th onClick={()=>alert("...")}>Xem chi tiết</th>
                                </tr>
                            )
                        }
                            
                        )}
                    </tbody>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>{total}</th>
                        <th>Total</th>
                    </tr>
                </Table>
            </div>
        </div>
    )
}
