function User({firstname, lastname, age}) {
    return (
        <tr>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{age}</td>
        </tr>
    )
}

export default User;