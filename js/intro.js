function createVideo() {

    // 抵消 animate.css 导致模态框被覆盖的 BUG
    document.querySelector("#banners").className = "";

    let html = `
    <div class="modal-content">

        <div class="modal-header">
            <h5 class="modal-title h4" id="exampleModalXlLabel">
                <span>Hello Codecat</span>
            </h5>

            <ul class="nav justify-content-end">
                <button type="button" class="close" data-dismiss="modal" onclick="removeVideo()" aria-label="关闭">
                    <span aria-hidden="true">&times;</span>
                </button>
            </ul>
        </div>

        <iframe class="modal-content" width="800" height="600" allowfullscreen="true" src="https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/60/77/97037760/97037760-1-192.mp4?e=ig8euxZM2rNcNbNznwdVhwdlhbh3hwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1655483521&gen=playurlv2&os=cosbv&oi=2015088686&trid=ab7c33d0ec874957ba2f7ad25a337ecdT&mid=0&platform=html5&upsig=4f0fe2d61c6c300fb34cc8ec0a3803b4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&bw=239105&orderid=0,1&logo=80000000"></iframe>

    </div>
    `;

    document.querySelector(".modal-dialog").innerHTML = html;
}

function removeVideo() {
    document.querySelector("iframe").remove();
}