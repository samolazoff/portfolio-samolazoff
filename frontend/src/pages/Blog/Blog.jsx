import './Blog.scss';

import BlogItem from '../../components/BlogItem/BlogItem';

const dataPosts = [
    {
        id: '23erewrwer',
        date: '2008-02-14 20:00',
        title: 'About me',
        txt: 'asdasdasd ads  as da sd as d asd<b/>   a asd afadf adf  scvdfg csfdgssdfsd fgfdg sfgsdf ggfsfdgfgsfgdsfg sfgsfgsfgsfg sfgsfgsfgsfgsfdg sf sfgdsfgsfgsfgs s sgfsfgs sfgs fgfgsfgsfgfg sfgsfgsfgsfg  sfgsfgsfgs sgsfgs ggfgsg s g f sggfgs fg sgg sgfg ssdfsd fd dsfdfdsf fd ffdsfsdfd sdf df fsdfdsfdfsdfdfdfsdfsdfs fsfdfs dsf sfff dff df f f gsfg sfgfdssdasdasfa fvs v gs v f gvs   sfg dfg fv  s g s v gc vg  g fg dsfgghjyj tyj tyh  ggtvrt   d  rt ervsdfsd fsdfcd fdsfsdfdsfdsf sfsdf dsfs fd f fdfsfsdf f df e tvr',
    },
    {
        id: '23erewrwer',
        date: '2008-02-14 20:00',
        title: 'About me',
        txt: 'asdasdasd ads  as da sd as d asd   asdasdasfa fvs v gs v f gvs   sfg dfg fv  s g s v gc vg  g fg dsfgghjyj tyj tyh  ggtvrt   d  rt erv e tvr',
    },
    {
        id: '23erewrwer',
        date: '2008-02-14 20:00',
        title: 'About me',
        txt: 'asdasdasd ads  as da sd as d asd   asdasdasfa fvs v gs v f gvs   sfg dfg fv  s g s v gc vg  g fg dsfgghjyj tyj tyh  ggtvrt   d  rt erv e tvr',
    },
    {
        id: '23erewrwer',
        date: '2008-02-14 20:00',
        title: 'About me',
        txt: 'asdasdasd ads  as da sd as d asd   asdasdasfa fvs v gs v f gvs   sfg dfg fv  s g s v gc vg  g fg dsfgghjyj tyj tyh  ggtvrt   d  rt erv e tvr',
    },
    {
        id: '23erewrwer',
        date: '2008-02-14 20:00',
        title: 'About me',
        txt: 'asdasdasd ads  as da sd as d asd   asdasdasfa fvs v gs v f gvs   sfg dfg fv  s g s v gc vg  g fg dsfgghjyj tyj tyh  ggtvrt   d  rt erv e tvr',
    }
];

const Blog = () => {
    return (
        <section className='app-blog'>
            <h2 className="title-box">Blog</h2>
            <ul className="app-blog-items">
                {
                    dataPosts.map((post, index) => (
                        <li key={index}>
                            <BlogItem post={post}></BlogItem>
                        </li>
                    ))
                }
            </ul>
            
        </section>
    );
};

export default Blog;