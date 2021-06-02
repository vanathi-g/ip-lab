import React from 'react';
import PageSection from './PageSection'

class Home extends React.Component {
    render() {
        let content_about = 'Proin tellus lorem, cursus vel pulvinar nec, ullamcorper sit amet augue. In et lobortis erat. Nullam dictum rutrum erat id bibendum. Quisque volutpat erat, at placerat dolor condimentum vel. Sed semper auctor ipsum, nec pellentesque tellus luctus vel. Suspendisse aliquam augue quis aliquet placerat. Sed turpis quam, scelerisque in diam eget, egestas consequat tortor. Praesent iaculis vehicula ullamcorper. \n Suspendisse ut erat vitae nisl ultricies tincidunt eu eu purus. Sed ultrices vehicula nulla, tristique viverra nulla venenatis ac. Nullam pharetra turpis sit amet mauris porta pulvinar. Nullam id turpis ut justo varius consequat non eget diam. Duis auctor, erat vitae rhoncus sodales, mauris justo facilisis sapien, sed lobortis urna dolor quis enim. Sed finibus molestie arcu ut pharetra. Praesent nec elit a odio tempus faucibus nec in justo.'

        let content_conf = 'Suspendisse ut erat vitae nisl ultricies tincidunt eu eu purus. Sed ultrices vehicula nulla, tristique viverra nulla venenatis ac. Nullam pharetra turpis sit amet mauris porta pulvinar. Nullam id turpis ut justo varius consequat non eget diam. Duis auctor, erat vitae rhoncus sodales, mauris justo facilisis sapien, sed lobortis urna dolor quis enim. Sed finibus molestie arcu ut pharetra. Praesent nec elit a odio tempus faucibus nec in justo.'
        
        return (
            <div>
                <PageSection id="about" title="About Us" content={content_about} displayList={false}/>
                <PageSection id="past-conferences" title="Past Conferences" content={content_conf} displayList={true}/>
            </div>
        );
    }
}

export default Home;