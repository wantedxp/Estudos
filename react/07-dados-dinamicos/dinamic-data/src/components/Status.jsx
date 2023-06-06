const Status = () => {
    const status = true

    return (
        <h2
            style={{
                color: status ? "#61f533" : "#ed1e13"
            }}
        >Current status: {status ? "ON" : "OFF"}</h2>
    )
}

export default Status


