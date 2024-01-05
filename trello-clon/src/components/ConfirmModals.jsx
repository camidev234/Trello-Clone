import PropTypes from 'prop-types';
import '../assets/css/Modals.css'


export const ConfirmModals = (props) => {



    return (
        <section className="modalWindow">
            <div className="titleModal">
                <h3>Are You Sure of this action?</h3>
            </div>
            {props.children}
        </section>
    )
}

ConfirmModals.propTypes = {
    children: PropTypes.node
}