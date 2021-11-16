import PropTypes from 'prop-types';

export const HeaderComponent = (props) => {

    const style = {
        height: 10 + '%',
        minHeight: 10 + '%',
    };

    return (
        <div style={style}>
            <h6>
                {props.title}
            </h6>
        </div>
    )
};

HeaderComponent.propTypes = {
    title: PropTypes.string.isRequired,
}
