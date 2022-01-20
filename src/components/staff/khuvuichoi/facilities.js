import React from "react"
import {useState} from "react"
import {Button, InputGroup, Form} from "react-bootstrap"
import BootstrapTable from 'react-bootstrap-table-next'
import cellEditFactory from 'react-bootstrap-table2-editor'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import "./facilities.css"

const star = <span style={{color:'red'}}>*</span>;

const Facilities = props => {
    const columns = [{
        dataField: 'facilities_code',
        text: 'Mã CSVC',
        sort: true
    }, {
        dataField: 'name',
        text: 'Tên CSVC'
    }, {
        dataField: 'region',
        text: 'Khu',
        sort: true
    }, {
        dataField: 'status',
        text: 'Tình trạng'
    }];
    const data = [{
        facilities_code: 'A01',
        name: 'Đu quay',
        region: 'A',
        status: 'chưa lắp'
    }, {
        facilities_code: 'B01',
        name: 'Cầu trượt',
        region: 'B',
        status: 'rít vcl'
    }, {
        facilities_code: 'A02',
        name: 'Xích đu',
        region: 'A',
        status: 'mất'
    }, {
        facilities_code: 'A04',
        name: 'Cầu trượt',
        region: 'A',
        status: 'toang'
    }];
    const [csvc, setCsvc] = useState(data);
    return <div className='facilities'>
        <Button>Thêm</Button>
        <BootstrapTable
        keyField='facilities_code'
        data={csvc}
        columns={columns}
        cellEdit={ cellEditFactory({ mode: 'click' }) }
        />
    </div>
}
export default Facilities