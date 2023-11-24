const googleSearch = (type) => {
    const targetDomain = document.getElementById('target').value;

    if (!targetDomain) {
        alert('Please enter a target domain.');
        return;
    }

    const payloads = {
        1: 'intitle:index.of',
        2: 'ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini',
        3: 'ext:sql | ext:dbf | ext:mdb',
        4: 'ext:log',
        5: 'ext:bkf | ext:bkp | ext:bak | ext:old | ext:backup',
        6: 'inurl:login',
        7: 'intext:"sql syntax near" | intext:"syntax error has occurred" | intext:"incorrect syntax near" | intext:"unexpected end of SQL command" | intext:"Warning: mysql_connect()" | intext:"Warning: mysql_query()" | intext:"Warning: pg_connect()"',
        8: 'ext:doc | ext:docx | ext:odt | ext:pdf | ext:rtf | ext:sxw | ext:psw | ext:ppt | ext:pptx | ext:pps | ext:csv',
        9: 'ext:php intitle:phpinfo "published by the PHP Group"',
        10: 'inurl:wp- | inurl:wp-content | inurl:plugins | inurl:uploads | inurl:themes | inurl:download',
        11: 'inurl:shell | inurl:backdoor | inurl:wso | inurl:cmd | shadow | passwd | boot.ini | inurl:backdoor',
        12: 'inurl:readme | inurl:license | inurl:install | inurl:setup | inurl:config',
        13: 'inurl:redir | inurl:url | inurl:redirect | inurl:return | inurl:src=http | inurl:r=http',
        14: 'ext:action | ext:struts | ext:do',
        15: 'site:pastebin.com',
        16: 'site:linkedin.com employees',
        17: 'inurl:"/phpinfo.php" | inurl:".htaccess" | inurl:"/.git" -github',
        18: 'site:*.',
        19: 'site:*.*.',
        20: 'inurl:wp-content | inurl:wp-includes',
        21: '"*."',
        22: 'http:// /crossdomain.xml',
        23: 'http://threatcrowd.org/domain.php?domain=',
        24: '+inurl: +ext:swf',
        25: 'site: mime:swf',
        26: '',
        27: '',
        28: '.',
        29: '',
        30: 'https://crt.sh/?q=%25.',
        31: 'https://www.openbugbounty.org/search/?search=',
        32: 'https://www.reddit.com/search/?q=',
        33: '+inurl: +ext:wp- | +inurl: +ext:wp-content',
        34: 'https://censys.io/ipv4?q=',
        35: 'https://censys.io/domain?q=',
        36: 'https://censys.io/certificates?q=',
        37: 'https://www.shodan.io/search?query=',
        38: 'inurl:"/geoserver/ows?service=wfs"',
        39: 'intext:"ArcGIS REST Services Directory" intitle:"Folder: /"',
        40: 'inurl:/wp-content/uploads/wpo_wcpdf',
        41: 'intitle:"index of "main.yml"',
        42: 'inurl:/admin.aspx',
        43: 'inurl:/wp-content/uploads/wpo_wcpdf',
        44: 'inurl:uploadimage.php',
        45: 'inurl:*/wp-content/plugins/contact-form-7/',
        46: 'intitle:index.of conf.php',
        47: 'intitle:"Sharing API Info"',
        48: 'intitle:"Index of" inurl:/backup/ "admin.zip"',
        49: 'intitle:"index of" github-api',
        50: 'inurl:/wp-content/uploads/wcpa_uploads',
        51: 'inurl:user intitle:"Drupal" intext:"Log in" -"powered by"',
        52: 'inurl: /libraries/joomla/database/',
        53: 'inurl:"php?sql=select" ext:php',
        54: 'inurl:"wp-content" intitle:"index.of" intext:wp-config.php',
        55: 'intext:"index of" inurl:json-rpc',
        56: 'intitle:"index of" "download.php?file="',
        57: 'intext:"index of" inurl:jwks-rsa',
        58: 'inurl:"wp-content" intitle:"index.of" intext:backup"',
        59: 'intitle:index.of conf.mysql',
        60: 'intitle:"index of" "users.yml" | "admin.yml" | "config.yml"',
        61: 'intitle:"index of" "docker-compose.yml"',
        62: 'intext:pom.xml intitle:"index of /"',
        63: 'intext:"Index of" intext:"/etc"',
        64: '"sql" "parent" intitle:index.of -injection',
    };
    

    const buildSearchQuery = (query) => `site:${targetDomain} ${query}`;
    const openSearchInNewTab = (site) => window.open(`https://www.google.com/search?q=${encodeURIComponent(site)}`, '_blank');

    if (payloads[type]) {
        const searchQuery = buildSearchQuery(payloads[type]);
        openSearchInNewTab(searchQuery);
    } else {
        alert('Invalid option.');
    }
};
