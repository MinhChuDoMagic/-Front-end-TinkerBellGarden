import React, {useState} from "react"
import {Button, Form, Row, Col} from "react-bootstrap"
import "./stallTicket.css"
const calculatePrice = () => {
    return 100000;
}
const star = <span style={{color:'red'}}>*</span>;
const getTicketList = () => {
    return [
        {value: 1, label: 'Đu quay'},
        {value: 2, label: 'Tô tượng lớn'},
        {value: 3, label: 'Xèng'}
    ];
}
function StallTicket() {
    const [showForm, setShowForm] = useState(false);
    const ticketList = getTicketList();
    return (
        <div className="outer">
            <div className="stallTicket">
                {!showForm
                    ? <Button onClick={() => setShowForm(!showForm)}>Tạo vé</Button>
                    : <>
                    <Form>
                        <Form.Group>
                            <Form.Label>Tên khách hàng</Form.Label>
                            <Form.Control placeholder="vd. Nguyễn Văn A"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Số điện thoại{star}</Form.Label>
                            <Form.Control type="tel" placeholder="vd. 0987654321"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Loại vé{star}</Form.Label>
                            <Form.Control as="select">
                                {ticketList.map((option) => (
                                <option value={option.value}>{option.label}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Số lượng{star}</Form.Label>
                            <Form.Control type="number" defaultValue="1" min="1"/>
                        </Form.Group>
                        {/* <Form.Group>
                            <Form.Label>Mã giảm giá</Form.Label>
                            <Form.Control placeholder="vd. 2021DDD"/>
                        </Form.Group> */}
                        <hr/>
                        <p>Giá tiền thanh toán: {calculatePrice()}vnđ</p>
                        <Button onClick={() => setShowForm(!showForm)} style={{marginRight: '40px'}}>Xác nhận</Button>
                        <Button onClick={() => setShowForm(!showForm)} variant='danger'>Hủy bỏ</Button>
                    </Form>
                    </>
                }
            </div>
        </div>

    )
}
export default StallTicket