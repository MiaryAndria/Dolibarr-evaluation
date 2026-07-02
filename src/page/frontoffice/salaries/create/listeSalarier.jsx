import { useEffect, useState } from "react";
import api_service from "../../../../api/api_service";
import { useNavigate } from "react-router-dom";

function ListeSalarier() {
    const [salarier, setSalarier] = useState([]);

    const navigate = useNavigate();

    const baseUrl = api_service.defaults.baseURL.replace('/api/index.php/', '')

    const getPhotoUrl = (user) => {
        const numberPath = parseInt(user.id) - 1;
        return `${baseUrl}/viewimage.php?modulepart=userphoto&file=${user.id}/photos/${numberPath}.png`;
    };

    const getSalarier = async () => {
        try {
            const response = await api_service.get(
                "users?sortfield=t.rowid&sortorder=ASC&limit=100&sqlfilters=(admin:=:0)"
            );
            setSalarier(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getSalarier();
    }, []);

    return (
        <div>
            <h2>Liste des salariés</h2>

            <table >
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Nom</th>
                        <th>Genre</th>
                        <th>Poste</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {salarier.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <img
                                    src={getPhotoUrl(user)}
                                    width={50}
                                    height={50}
                                    alt={user.lastname}
                                />
                            </td>
                            <td>{user.lastname} {user.firstname}</td>
                            <td>{user.gender}</td>
                            <td>{user.job}</td>
                            <td>
                                <button onClick={() => navigate(`/salarier/${user.id}`)}>Voir détail</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListeSalarier;