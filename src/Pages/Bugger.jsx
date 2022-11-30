import React, { Component } from 'react'
import { connect } from 'react-redux'
import './bugger.css'
import TableBurger from './TableBurger'
class Bugger extends Component {
    renderBurger = () => {
        let { buggerState } = this.props
        let { burger } = buggerState;
        // *  Cách 1  * // { Dùng cho for in bóc tách value trong object rồi for thêm lần nữa để push vào mảng }
        // let content = [];
        // for (let item in burger) {
        //     let arrMeat = [];
        //     for (let i = 0; i < burger[item]; i++) {
        //         arrMeat.push(<div key={i} className={item}></div>)
        //     }
        //     content.push(arrMeat)
        // }
        // return content;

        // *  Cách 2  * // { Đưa object về mảng rồi dùng for push phần tử vào}
        return Object.entries(burger).map(([item, value], index) => {
            let arrMeat = [];
            for (let i = 0; i < value; i++) {
                arrMeat.push(<div key={i} className={item}></div>)
            }
            return (
                arrMeat
            )
        })
    }
    render() {
        return (
            <>
                <h1 className='text-center pb-5'>BÀI TẬP BURGER</h1>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='text-center display-6 text-danger mb-4' style={{ fontWeight: 'bold' }}>Bánh burger của bạn</div>
                        <div className='breadTop'></div>
                        {/* <div className='salad'></div>
                        <div className='cheese'></div>
                        <div className='beef'></div> */}
                        {this.renderBurger()}
                        <div className='breadBottom'></div>
                    </div>
                    <div className='col-md-6'>
                        <h1 className='text-center text-success'>Chọn thức ăn</h1>
                        <TableBurger />
                    </div>

                </div>

            </>
        )
    }
}

const mapStateToProps = (state) => ({
    buggerState: state.buggerState,
})


const ExserciseBurger = connect(mapStateToProps)(Bugger);
export default ExserciseBurger
