import React, { Component } from 'react'
import { connect } from 'react-redux'
class Table extends Component {
    renderTable = () => {
        let { burger, menu } = this.props
        let contentHead = [];
        for (let item in menu) {
            let arrMenu = [];
            arrMenu.push(
                <tr key={item}>
                    <td>{item}</td>
                    <td>
                        <button className='btn btn-danger mx-2' onClick={() => {
                            const action = {
                                type: 'soLuong',
                                payload: item,
                                item: -1,
                            }
                            this.props.dispatch(action)
                        }}>-</button>
                        {burger[item]}
                        <button className='btn btn-success mx-2' onClick={() => {
                            const action = {
                                type: 'soLuong',
                                payload: item,
                                item: 1,
                            }
                            this.props.dispatch(action)
                        }}>+</button>
                    </td>
                    <td>{menu[item]}</td>
                    <td>{burger[item] * menu[item]}</td>
                </tr>
            )
            contentHead.push(arrMenu);
        }
        return contentHead;
    }
    render() {
        let { total } = this.props
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='text-success'>Thức ăn</th>
                            <th className='text-success'>Số lượng</th>
                            <th className='text-success'>Đơn giá</th>
                            <th className='text-success'>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={2}></td>
                            <td style={{ fontWeight: 'bold' }}>Tổng cộng:</td>
                            <td><div><span className='text-success' style={{ fontWeight: 'bold' }}>{total}<sup>$</sup></span></div></td>
                        </tr>
                    </tfoot>
                </table>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    burger: state.buggerState.burger,
    menu: state.buggerState.menu,
    total: state.buggerState.total
})


const TableBurger = connect(mapStateToProps)(Table);
export default TableBurger;
