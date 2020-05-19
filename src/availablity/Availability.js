import React, { Component } from 'react'
import './Availability.css';
import { Container, Row, Col, Tooltip } from 'reactstrap'
import ModalExample from './AvailabilityModal'
import DatePickerInput from './Datepicker'

export default class Availability extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            isTooltip: false
        }
    }

    onToggle = () => {
        this.setState(state => ({
            showModal: !state.showModal
        }))
    }
    onTooltip = () => {
        this.setState(state => ({
            showModal: !state.isTooltip
        }))
    }


    render() {
        return (
            <Container>
                <Row className="m-1 mt-5">
                    <Col sm="12" md={{ size: 6, offset: 3 }} className="shadow p-3 mb-5 bg-white rounded">
                        <div> <p id="TooltipTarger">&#128184; Upto 5% Cashback <span>
                            &#63;
                            <Tooltip placement="right" isOpen={this.state.isTooltip} target="TooltipTarger" toggle={this.onTooltip}>
                                Upto 5% Cashback
                            </Tooltip>
                        </span></p>
                        </div>
                        <hr />
                        <div>
                            <div className="text-muted">from</div>
                            <div className="price_font">&#163; 139</div>
                        </div>
                        <div className="mt-4">
                            <DatePickerInput />
                        </div>

                        <div className="mt-4">
                            <ModalExample
                                buttonLabel="Check Availability"
                                showModal={this.state.showModal}
                                onToggle={this.onToggle} />
                            {/* <button className="check_btn" onClick={this.onToggle}>Check Availability</button> */}
                        </div>
                        <hr className="bt_dotted mt-4" />
                        <p className="text-center mt-4">	&#128175; <span className="best_price">BEST PRICE GURANTEED</span></p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
