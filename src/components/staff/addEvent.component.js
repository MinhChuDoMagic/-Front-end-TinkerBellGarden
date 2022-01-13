import React, { Component } from "react";

export default class addEvent extends Component {
    render() {
        return (
            <div className="outer">
                <div className="inner1">
                    <form>
                        <h3>Thêm sự kiện</h3>

                        <div className="form-group">
                            <label>Tiêu đề</label>
                            <input type="text" className="form-control" placeholder="Nhập tên sự kiện" />
                        </div>

                        <div className="form-group">
                            <label>Nhập nội dung</label>
                            <textarea className="form-control" type="text" rows="6" placeholder="Nhập nội dung"></textarea>
                        </div>

                        <div className="form-group">
                            <label>Thêm ảnh</label>
                            <input type="file" className="form-control-file" id="exampleFormControlFile1"  accept="image/png, image/jpeg" />
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}