import { Link } from 'react-router-dom';
import Layout from './layouts/Layout';

function User() {
    return (
       <>
            <Layout>
            <main id="main" className="main">
                <div className="pagetitle">
                <h1>User</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item">Pages</li>
                    <li className="breadcrumb-item active">Blank</li>
                    </ol>
                </nav>
                </div>
                </main>
            </Layout>
       </>
    );

}

export default User;