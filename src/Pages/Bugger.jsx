import React, { Component } from 'react'
import { connect } from 'react-redux'
import './bugger.css'
class Bugger extends Component {
    render() {
        console.log(this.props)
        return (
            <>
                <h1 className='text-center pb-5'>BÀI TẬP BURGER</h1>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='text-center display-6 text-danger mb-4' style={{ fontWeight: 'bold' }}>Bánh burger của bạn</div>
                        <div className='breadTop'></div>
                        <div className='salad'></div>
                        <div className='cheese'></div>
                        <div className='beef'></div>
                        <div className='breadBottom'></div>
                    </div>
                    <div className='col-md-6'>
                        <h1 className='text-center'>Chọn thức ăn</h1>
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
