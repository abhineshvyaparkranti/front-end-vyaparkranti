import simg1 from '../images/resource/service-1.jpg'
import simg2 from '../images/resource/service-5.jpg'
import simg3 from '../images/resource/service-6.jpg'
import simg4 from '../images/resource/service-7.jpg'
import simg5 from '../images/resource/service-8.jpg'
import simg6 from '../images/resource/service-9.jpg'

import sIcon1 from '../images/icons/service-1.png' 
import sIcon2 from '../images/icons/service-2.png' 
import sIcon3 from '../images/icons/service-3.png' 



const Services = [
    {
        Id: '1',
        sTitle: 'Content Marketing', 
        slug: 'Content-Marketing',
        sImg:simg1,
        Icon:'flaticon-pie-chart',
        sIcon:sIcon1,
        des:'You can provide the answers that your potential customers are trying to find, so you can become the industry.',
    },
    {
        Id: '2',
        sTitle: 'Social Marketing', 
        slug: 'Social-Marketing',
        sImg:simg2,
        sIcon:sIcon2,
        Icon:'flaticon-line-chart',
        des:'Create and manage top-performing social campaigns and start developing a dedicated customer fan base.',
    },
    {
        Id: '3',
        sIcon:sIcon3,
        sTitle: 'App Development', 
        slug: 'App-Development',
        sImg:simg3,
        Icon:'flaticon-bar-chart',
        des:'Create, publish, and promote engaging content to generate more traffic and build a dedicated community.',
    },
    {
        Id: '4',
        sTitle: 'SEO Optimization', 
        slug: 'SEO-Optimization',
        sImg:simg4,
        sIcon:sIcon1,
        Icon:'flaticon-search-1',
        des:'Get more website traffic, more customers, and more online visibility with powerful SEO services.',
    },
    {
        Id: '5',
        sTitle: 'Web Development', 
        slug: 'Web-Development',
        sImg:simg5,
        Icon:'flaticon-gear',
        des:'Your website has to impress your visitors within just a few seconds. If it runs slow, if it feels outdated.',
    },
    {
        Id: '6',
        sTitle: 'PPC Advertising', 
        slug: 'PPC-Advertising',
        sImg:simg6,
        Icon:'flaticon-cloud-computing',
        des:'You can provide the answers that your potential customers are trying to find, so you can become the industry.',
    }
]

export default Services;