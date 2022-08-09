function Nav(props) {
    const lis = []
    // 동적으로 태그를 만들어서 배열에 담아준다
    // map을 많이 쓰는데 어려우니까 for문으로 예제
    for (let i=0; i<props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(<li key={t.id}>
            <a id={t.id} href={'/read/'+t.id} onClick={event=>{
                event.preventDefault();
                props.onChangeMode(Number(event.target.id)); // event.target = 이벤트를 유발시킨 태그 = 여기서는 a태그
            }}>{t.title}</a>
        </li>)
    }
    return <nav>
        <ol>
            {lis}
        </ol>
    </nav>
}

export default Nav;