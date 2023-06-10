import './footer.scss';

export default class Footer {
  render(): void {
    const footerContainer: HTMLDivElement = document.createElement('div') as HTMLDivElement;
    footerContainer.classList.add('footer__container');
    const footerMygit: HTMLDivElement = document.createElement('div') as HTMLDivElement;
    footerMygit.classList.add('footer__mygit');
    const mygitLink: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;
    mygitLink.classList.add('mygit__link');
    mygitLink.href = 'https://github.com/alex5667';
    const mygitImg: HTMLImageElement = document.createElement('img') as HTMLImageElement;
    mygitImg.src = `../../../assets/github-svgrepo-com.svg`;
    mygitImg.alt = `Github link`;
    const footerYear: HTMLDivElement = document.createElement('div') as HTMLDivElement;
    footerYear.classList.add('footer__year');
    footerYear.innerHTML = `2023`;
    const footerRs: HTMLDivElement = document.createElement('div') as HTMLDivElement;
    footerRs.classList.add('footer__rs');
    const rsLink: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;
    rsLink.classList.add('rs__link');
    rsLink.href = 'https://rs.school/js/';
    const rsImg: HTMLImageElement = document.createElement('img') as HTMLImageElement;
    rsImg.src = `../../../assets/rs_school_js.svg`;
    rsImg.alt = `Rs-school link`;
    const footer: HTMLElement = document.querySelector('footer') as HTMLElement;
    footer.appendChild(footerContainer);
    footerContainer.appendChild(footerMygit);
    footerMygit.appendChild(mygitLink);
    mygitLink.appendChild(mygitImg);
    footerContainer.appendChild(footerYear);
    footerContainer.appendChild(footerRs);
    footerRs.appendChild(rsLink);
    rsLink.appendChild(rsImg);



    // if(footer) footer.appendChild(footerContainer);
    // if(footerContainer) footerContainer.appendChild(footerMygit);
    // if(footerMygit) footerMygit.appendChild(mygitLink);
    // if(mygitLink) mygitLink.appendChild(mygitImg);
    // if(footerContainer) footerContainer.appendChild(footerYear);
    // if(footerContainer) footerContainer.appendChild(footerRs);
    // if(footerRs) footerRs.appendChild(rsLink);
    // if(rsLink) rsLink.appendChild(rsImg);
  }
}