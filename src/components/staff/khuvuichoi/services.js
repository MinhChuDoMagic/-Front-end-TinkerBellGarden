import React from "react"
import {useState} from "react"
import {Button, InputGroup, Form} from "react-bootstrap"
import BootstrapTable from 'react-bootstrap-table-next'
import cellEditFactory from 'react-bootstrap-table2-editor'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

const Services = props => {
    const columns = [{
        dataField: 'title',
        text: 'Mã vé',
        sort: true
    }, {
        dataField: 'nameTicket',
        text: 'Tên vé'
    }, {
        dataField: 'price',
        text: 'Giá',
        sort: true
    }];
    const data = [{
        title: 'V01',
        nameTicket: 'Vé ngày',
        price: 100000
    }, {
        title: 'V02',
        nameTicket: 'Vé 2 giờ',
        price: 40000
    }, {
        title: 'V05',
        nameTicket: 'Đăng ký thành viên VIP',
        price: 300000
    }, {
        title: 'V10',
        nameTicket: 'Xếp hình',
        price: 5000
    }, {
        title: 'V11',
        nameTicket: 'Tàu nhanh',
        price: 30000
    }];
    const [srvc, setSrvc] = useState(data);
    return <div>
        <Button>Thêm</Button>
        <BootstrapTable
        keyField='title'
        data={srvc}
        columns={columns}
        cellEdit={ cellEditFactory({ mode: 'click' }) }
        />
    </div>
}
export default Services