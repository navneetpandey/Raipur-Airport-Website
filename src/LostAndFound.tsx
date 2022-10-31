import React, {useState} from "react";

interface LostItem {
    serialNumber: number
    itemCode: string
    category: string
    airport: string
    description: string
    date: string
    phoneNumber: string
    emailAddress: string
}

export function LostAndFound() {
    const [lostAndFoundList, setLostAndFoundList] = useState<Array<LostItem> | null>(null);

    const requestOptions = {
        headers: { 'Content-Type': 'application/json' },
    };
    fetch('http://13.233.19.221:8080/proxy/lost_and_found', requestOptions)
        .then(response => response.json())
        .then(data => setLostAndFoundList(data));

    return (
        lostAndFoundList == null ? <div className="loader"></div> : <table>
            <tbody>
            {lostAndFoundList.map(lostItem =>
                <tr>
                    <td>{lostItem.serialNumber}</td>
                    <td>{lostItem.itemCode}</td>
                    <td>{lostItem.category}</td>
                    <td>{lostItem.airport}</td>
                    <td>{lostItem.description}</td>
                    <td>{lostItem.date}</td>
                    <td>{lostItem.phoneNumber}</td>
                    <td>{lostItem.emailAddress}</td>
                </tr>
            )
            }
            </tbody>
        </table>
    );
}
