import * as React from "react";
import { Admin, fetchUtils, Resource, ListGuesser, Layout } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./UserList";
import { PostShow } from "./PostShow";
import { PostList } from "./PostList";
import { PostEdit } from "./PostEdit";
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/People';
import AlbumIcon from '@mui/icons-material/Book';
import CustomAppBar from "./CustomAppBar";

const dataProvider = jsonServerProvider('', { cache: 'none' });

const AppBarLayout = (props) => <Layout {...props} appBar={CustomAppBar} />;

const AdminDash = () => (
 
        <Admin layout={AppBarLayout} dataProvider={dataProvider} >
            {/* <Resource name="posts" options={{ label: 'Posts' }} list={PostList} show={PostShow} edit={PostEdit} icon={PostIcon} /> */}
            {/* <Resource name="users" options={{ label: 'Users' }} list={UserList} icon={UserIcon} />  */}
            {/* <Resource name="albums" options={{ label: 'Albums' }} list={ListGuesser} icon={AlbumIcon} /> */}
        </Admin>

    

);

export default AdminDash;