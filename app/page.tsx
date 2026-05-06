 'use client';

import { useEffect } from 'react';

const pageMarkup = `
  <div class="cursor-aura"></div>
  <nav class="nav">
    <a href="#intro" class="brand" aria-label="回到首页"><span class="brand-mark">S</span><span>SAIL / LYF</span></a>
    <div class="nav-links" id="navLinks">
      <a href="#intro">Intro</a><a href="#education">Education</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#campus">Campus</a><a href="#contact">Contact</a>
    </div>
    <div class="nav-actions"><button class="pill" onclick="copyEmail()">复制邮箱</button><button class="pill" onclick="window.print()">打印简历</button></div>
  </nav>

  <main>
    <section id="intro" class="chapter active"><div class="chapter-inner hero-grid">
      <div>
        <div class="eyebrow"><span class="spark"></span> Statistics MSc · Data Analyst · Strategy Operation</div>
        <div class="name-stage" id="nameStage"><h1 class="name-cn" id="nameCn">李雨帆</h1><div class="name-en" id="nameEn">Sail</div></div>
        <p class="hero-sub">Data into Decisions.</p>
        <p class="hero-desc">统计学背景，关注数据分析、策略运营、用户增长与 BI 可视化。</p>
        <div class="contact-icons"><a class="icon-card" href="tel:18187948248">☎ 18187948248</a><a class="icon-card" href="mailto:liyufan24gz@163.com">✉ liyufan24gz@163.com</a><span class="icon-card">⌁ Hong Kong CityU · Statistics</span></div>
        <div class="tags"><span class="tag">SQL</span><span class="tag">Python</span><span class="tag">R</span><span class="tag">BI Dashboard</span><span class="tag">User Growth</span></div>
        <div class="cta-row"><a class="primary" href="#education">Explore My Journey ↓</a><button class="ghost" onclick="copyEmail()">Let’s Connect</button></div>
      </div>
      <div class="tech-panel" aria-label="鼠标响应式星球标签科技视觉装置">
        <div class="liquid-galaxy" id="heroGalaxy">
          <div class="planet-core"></div>
          <div class="tag-orbit o1"><span class="planet-tag">SQL</span><span class="planet-tag">Python</span><span class="planet-tag">R</span><span class="planet-tag">BI</span></div>
          <div class="tag-orbit o2 reverse"><span class="planet-tag">Growth</span><span class="planet-tag">Strategy</span><span class="planet-tag">A/B Test</span><span class="planet-tag">Dashboard</span></div>
          <div class="tag-orbit o3"><span class="planet-tag">LightGBM</span><span class="planet-tag">XGBoost</span><span class="planet-tag">SHAP</span><span class="planet-tag">PCA</span></div>
          <div class="data-readout r1"><span class="readout-label">Signal</span>Market Insight</div><div class="data-readout r2"><span class="readout-label">Model</span>XGBoost · LightGBM</div><div class="data-readout r3"><span class="readout-label">Output</span>Dashboard · Strategy</div>
        </div>
      </div>
    </div></section>

    <section id="education" class="chapter"><div class="chapter-inner">
      <div class="section-head"><div><div class="section-kicker">Academic Orbit</div><h2>教育背景</h2></div><p class="section-desc">以统计学训练为基础，形成数据分析、统计建模和业务问题拆解能力。</p></div>
      <div class="grid edu-grid">
        <article class="card"><h3 class="card-title">香港城市大学</h3><div class="meta"><span>2024/09 - 2025/10</span><span>统计学（理学硕士）</span></div><ul class="bullet-list"><li>系统学习统计建模、数据分析、预测方法与业务分析相关课程。</li><li>强化机器学习、函数型时间序列和数据驱动决策能力。</li></ul></article>
        <article class="card"><h3 class="card-title">应急管理大学</h3><div class="meta"><span>2019/09 - 2023/07</span><span>应用统计学（理学学士）</span></div><ul class="bullet-list"><li>本科毕业论文参加北京多所高校评委公开联合答辩并获优秀本科毕业论文。</li><li>本科期间发表论文一篇，并被中国科学技术信息研究所收录。</li></ul></article>
      </div>
    </div></section>

    <section id="experience" class="chapter"><div class="chapter-inner">
      <div class="section-head"><div><div class="section-kicker">Career Missions</div><h2>个人经历</h2></div><p class="section-desc">通过实习、项目与科研三个分页展示业务洞察、模型方法和策略落地能力。</p></div>
      <div class="tabs"><button class="tab active" data-tab="intern">实习 Internship</button><button class="tab" data-tab="project">项目 Projects</button><button class="tab" data-tab="research">科研 Research</button></div>
      <div class="tab-panel active" id="intern">
        <article class="card mission open"><div class="mission-head"><div><h3>安克创新科技股份有限公司｜策略运营实习生</h3><div class="meta"><span>2025/08 - 2025/10</span><span>市场洞察系统运营 / Amazon 高危订单缺陷预测</span></div><p class="mission-summary">主导市场洞察 BI 仪表盘六大核心模块设计，并参与高危订单缺陷预测与干预专项。</p></div><div class="expand">＋</div></div><div class="mission-detail"><div class="detail-grid"><div class="detail-box"><b>Challenge</b>大促期间订单量激增，库存同步滞后导致超卖和订单缺陷率上升。</div><div class="detail-box"><b>Method</b>基于 2.8 万条历史数据构建库存风险、销售波动与同步延迟等特征，融合 XGBoost 与逻辑回归完成 SKU 风险分级。</div><div class="detail-box"><b>Impact</b>AUC=0.86，准确率 85%；高风险订单增长抑制 45%，订单缺陷率由 3.2% 降至 2.1%。</div></div></div></article>
        <article class="card mission"><div class="mission-head"><div><h3>东吴证券（香港）｜运营清算部 数据专员实习生</h3><div class="meta"><span>2025/04 - 2025/06</span><span>证券研究数据支持 / 合规审核数据化</span></div><p class="mission-summary">完成数据获取、清洗、可视化与数据快报编写，并推动账户审核 SOP 标准化。</p></div><div class="expand">＋</div></div><div class="mission-detail"><div class="detail-grid"><div class="detail-box"><b>Challenge</b>研究与运营场景中存在数据分散、人工审查重复、标准不统一的问题。</div><div class="detail-box"><b>Method</b>进行数据预处理、缺失值填补、可视化分析，并提炼 3 类高频文件缺失问题。</div><div class="detail-box"><b>Impact</b>为分析师提供专项分析支持，编写《账户审核 SOP》，提升团队审核效率。</div></div></div></article>
        <article class="card mission"><div class="mission-head"><div><h3>欢聚集团｜用户增长数据分析实习生</h3><div class="meta"><span>2025/01 - 2025/03</span><span>创作者召回 / 用户分层 / A/B 实验</span></div><p class="mission-summary">围绕流失创作者召回，构建预测模型与分群策略，提升召回后的价值跃迁率。</p></div><div class="expand">＋</div></div><div class="mission-detail"><div class="detail-grid"><div class="detail-box"><b>Challenge</b>创作者流失率攀升，传统无差别召回策略 ROI 较低。</div><div class="detail-box"><b>Method</b>基于 LightGBM 预测 30 天内活跃度跃迁潜力，结合 SHAP、KM 曲线、相关性分析和决策树确定策略介入点。</div><div class="detail-box"><b>Impact</b>制定差异化激励策略并通过 A/B 实验验证，使流失召回后创作者 30 天价值跃迁率提升 2%。</div></div></div></article>
      </div>
      <div class="tab-panel" id="project">
        <article class="card mission open"><div class="mission-head"><div><h3>Amazon 高危订单缺陷预测与干预</h3><p class="mission-summary">围绕库存同步滞后和账户健康风险，建立数据驱动的风险防控体系。</p></div><div class="expand">＋</div></div><div class="mission-detail"><div class="detail-grid"><div class="detail-box"><b>Data</b>2.8 万条历史订单与库存相关数据。</div><div class="detail-box"><b>Model</b>XGBoost + 逻辑回归融合模型，输出 SKU 风险分级。</div><div class="detail-box"><b>Action</b>高风险库存预留，中风险每日核查，低风险仪表盘监控。</div></div></div></article>
        <article class="card mission"><div class="mission-head"><div><h3>市场洞察 BI Dashboard</h3><p class="mission-summary">将业务需求转化为数据结构和可视化模块，解决分析视角碎片化问题。</p></div><div class="expand">＋</div></div><div class="mission-detail"><div class="detail-grid"><div class="detail-box"><b>Role</b>跨部门统筹、需求拆解、数据集搭建。</div><div class="detail-box"><b>Tool</b>SQL 数据集 + BI 可视化仪表盘。</div><div class="detail-box"><b>Value</b>支撑不同业务场景下的交互式分析和高效决策。</div></div></div></article>
        <article class="card mission"><div class="mission-head"><div><h3>流失创作者价值跃迁分析</h3><p class="mission-summary">用模型筛选高潜召回对象，通过分层干预提升召回质量。</p></div><div class="expand">＋</div></div><div class="mission-detail"><div class="detail-grid"><div class="detail-box"><b>Model</b>LightGBM、SHAP、KM 曲线、简单决策树。</div><div class="detail-box"><b>Strategy</b>基于分群画像和介入时机制定差异化激励策略。</div><div class="detail-box"><b>Result</b>召回后 30 天价值跃迁率提升 2%。</div></div></div></article>
      </div>
      <div class="tab-panel" id="research">
        <article class="card mission open"><div class="mission-head"><div><h3>函数型时间序列的部分预测｜项目组长</h3><div class="meta"><span>2025/06 - 2025/08</span><span>PM2.5 小时级数据 / R / PCA / 函数自回归</span></div><p class="mission-summary">针对只能获取当日部分时段数据的监测场景，探索更适用的动态预测模型。</p></div><div class="expand">＋</div></div><div class="mission-detail"><div class="detail-grid"><div class="detail-box"><b>Question</b>如何利用部分历史观测预测未来污染变化趋势。</div><div class="detail-box"><b>Method</b>通过 R 实现 PCA 降维并提取动态特征，结合函数自回归模型与最小化预测误差准则。</div><div class="detail-box"><b>Result</b>实现 PM2.5 浓度动态实时预测，对比传统方法预测 MSE 降低 86.99%。</div></div></div></article>
      </div>
    </div></section>

    <section id="skills" class="chapter"><div class="chapter-inner">
      <div class="section-head"><div><div class="section-kicker">Analytics Toolkit</div><h2>个人技能</h2></div><p class="section-desc">技能结构覆盖数据处理、统计建模、策略运营、可视化表达与跨部门协作。</p></div>
      <div class="grid skills-grid">
        <article class="card"><h3 class="card-title">Data Stack</h3><p class="meta">数据处理与分析工具</p><div class="skill-cloud"><span class="skill">SQL</span><span class="skill">Python</span><span class="skill">R</span><span class="skill">Matlab</span><span class="skill">SPSS</span><span class="skill">Amos</span></div></article>
        <article class="card"><h3 class="card-title">Modeling</h3><p class="meta">统计建模与机器学习</p><div class="skill-cloud"><span class="skill">XGBoost</span><span class="skill">LightGBM</span><span class="skill">逻辑回归</span><span class="skill">PCA</span><span class="skill">SHAP</span><span class="skill">函数型时间序列</span></div></article>
        <article class="card"><h3 class="card-title">Business Ops</h3><p class="meta">业务分析与策略落地</p><div class="skill-cloud"><span class="skill">市场洞察</span><span class="skill">用户增长</span><span class="skill">风险分级</span><span class="skill">策略干预</span><span class="skill">A/B 实验</span><span class="skill">SOP</span></div></article>
        <article class="card"><h3 class="card-title">Communication</h3><p class="meta">可视化与协作表达</p><div class="skill-cloud"><span class="skill">BI Dashboard</span><span class="skill">数据快报</span><span class="skill">Office</span><span class="skill">跨部门协作</span><span class="skill">CET-6</span><span class="skill">IELTS 6.5</span></div></article>
      </div>
    </div></section>

    <section id="campus" class="chapter"><div class="chapter-inner">
      <div class="section-head"><div><div class="section-kicker">Leadership & Campus</div><h2>校园经历</h2></div><p class="section-desc">实践外联经历体现资源整合、活动组织、校企沟通与执行推进能力。</p></div>
      <div class="campus-layout"><article class="card"><h3 class="card-title">应急管理大学学生会｜实践外联部部长</h3><div class="meta"><span>2019/10 - 2021/10</span><span>组织统筹 / 外联合作 / 活动策划</span></div><ul class="bullet-list"><li>促成学校与 10+ 校外企业合作，为校内活动筹集赞助资金并推动学校品牌宣传。</li><li>2 年内组织校内外实践活动 10 余次，提升学生社会实践能力并加深校企联系。</li></ul></article><article class="card"><h3 class="card-title">Awards & Recognition</h3><p class="section-desc">本科期间获得多项校园荣誉，体现稳定执行力和组织贡献。</p><div class="badge-list"><span class="badge">校级优秀学生干部</span><span class="badge">社会实践项目二等奖</span><span class="badge">优秀记者</span><span class="badge">先进个人</span></div></article></div>
    </div></section>

    <section id="contact" class="chapter"><div class="chapter-inner contact-finale">
      <div class="final-orb"><div class="planet-core"></div><div class="tag-orbit o1"><span class="planet-tag">SQL</span><span class="planet-tag">BI</span><span class="planet-tag">Growth</span><span class="planet-tag">Ops</span></div><div class="tag-orbit o2 reverse"><span class="planet-tag">Sail</span><span class="planet-tag">Data</span><span class="planet-tag">Model</span><span class="planet-tag">Insight</span></div><div class="tag-orbit o3"><span class="planet-tag">Strategy</span><span class="planet-tag">Dashboard</span><span class="planet-tag">A/B</span><span class="planet-tag">Research</span></div></div>
      <div><div class="section-kicker">Contact Signal</div><div class="motto">I build <span id="mottoWord">dashboards.</span></div><p class="footer-note">求职意向：数据分析、策略运营、商业分析、用户增长、BI 可视化相关岗位。</p><div class="contact-panel"><a class="icon-card" href="mailto:liyufan24gz@163.com">✉ liyufan24gz@163.com</a><a class="icon-card" href="tel:18187948248">☎ 18187948248</a><span class="icon-card">⌁ Sail · 李雨帆</span></div><div class="cta-row" style="margin-top:20px"><button class="primary" onclick="copyEmail()">Copy Email</button><a class="ghost" href="#intro">Back to Top ↑</a></div></div>
    </div></section>
  </main>

  <div class="toast" id="toast">邮箱已复制</div>

  <script>
    const email = 'liyufan24gz@163.com';
    function copyEmail(){ navigator.clipboard?.writeText(email).then(showToast).catch(() => { location.href = 'mailto:' + email; }); }
    function showToast(){ const t = document.getElementById('toast'); t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 1600); }

    const root = document.documentElement;
    const heroGalaxy = document.getElementById('heroGalaxy');
    window.addEventListener('mousemove', (e) => {
      root.style.setProperty('--mx', e.clientX + 'px');
      root.style.setProperty('--my', e.clientY + 'px');
      if(heroGalaxy){
        const rect = heroGalaxy.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const px = (x / rect.width - .5) * 42;
        const py = (y / rect.height - .5) * 42;
        heroGalaxy.style.setProperty('--px', px + 'px');
        heroGalaxy.style.setProperty('--py', py + 'px');
        heroGalaxy.style.setProperty('--localX', (x / rect.width * 100) + '%');
        heroGalaxy.style.setProperty('--localY', (y / rect.height * 100) + '%');
        root.style.setProperty('--tiltY', ((x / rect.width - .5) * 10).toFixed(2) + 'deg');
        root.style.setProperty('--tiltX', ((.5 - y / rect.height) * 10).toFixed(2) + 'deg');
      }
    });

    const chapters = [...document.querySelectorAll('.chapter')];
    const navItems = [...document.querySelectorAll('.nav-links a')];
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          chapters.forEach(sec => { sec.classList.remove('active','past'); if(sec.offsetTop < entry.target.offsetTop) sec.classList.add('past'); });
          entry.target.classList.add('active');
          navItems.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
        }
      });
    }, { threshold: .58 });
    chapters.forEach(sec => io.observe(sec));

    document.querySelectorAll('.tab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
      });
    });
    document.querySelectorAll('.mission').forEach(card => card.addEventListener('click', () => card.classList.toggle('open')));

    const cnBase = '李雨帆';
    const enBase = 'Sail';
    const cnGlyphs = ['数','据','策','略','增','长','析','模','型','⟡','✦','✧','◌','◇','◆'];
    const enGlyphs = ['S','A','I','L','0','1','∆','λ','Σ','∞','◈','✦','/','_'];
    function scrambleText(el, finalText, glyphs, duration = 820){
      let frame = 0;
      const total = 22;
      const original = finalText.split('');
      const timer = setInterval(() => {
        const progress = frame / total;
        el.textContent = original.map((ch, idx) => {
          const lockPoint = idx / original.length * .48 + .30;
          if(progress > lockPoint) return ch;
          if(ch === ' ') return ' ';
          return glyphs[Math.floor(Math.random() * glyphs.length)];
        }).join('');
        frame++;
        if(frame > total){ clearInterval(timer); el.textContent = finalText; }
      }, duration / total);
    }
    function animateName(){
      const stage = document.getElementById('nameStage');
      const cn = document.getElementById('nameCn');
      const en = document.getElementById('nameEn');
      stage.classList.add(Math.random() > .5 ? 'decoding' : 'scanline');
      scrambleText(cn, cnBase, cnGlyphs);
      scrambleText(en, enBase, enGlyphs);
      setTimeout(() => stage.className = 'name-stage', 920);
    }
    setInterval(animateName, 2000);

    const motto = ['dashboards.', 'growth strategies.', 'decision signals.', 'business insights.', 'data products.'];
    let mi = 0;
    setInterval(() => {
      mi = (mi + 1) % motto.length;
      const el = document.getElementById('mottoWord');
      el.style.opacity = 0;
      setTimeout(() => { el.textContent = motto[mi]; el.style.opacity = 1; }, 220);
    }, 1800);
  </script>
`;

export default function Page() {
  useEffect(() => {
    const email = 'liyufan24gz@163.com';
    (window as any).copyEmail = function() {
      navigator.clipboard?.writeText(email).then(() => {
        const t = document.getElementById('toast');
        t?.classList.add('show');
        setTimeout(() => t?.classList.remove('show'), 1600);
      }).catch(() => { window.location.href = 'mailto:' + email; });
    };

    const root = document.documentElement;
    const heroGalaxy = document.getElementById('heroGalaxy') as HTMLElement | null;
    const mouseHandler = (e: MouseEvent) => {
      root.style.setProperty('--mx', e.clientX + 'px');
      root.style.setProperty('--my', e.clientY + 'px');
      if(heroGalaxy){
        const rect = heroGalaxy.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const px = (x / rect.width - .5) * 42;
        const py = (y / rect.height - .5) * 42;
        heroGalaxy.style.setProperty('--px', px + 'px');
        heroGalaxy.style.setProperty('--py', py + 'px');
        heroGalaxy.style.setProperty('--localX', (x / rect.width * 100) + '%');
        heroGalaxy.style.setProperty('--localY', (y / rect.height * 100) + '%');
        root.style.setProperty('--tiltY', ((x / rect.width - .5) * 10).toFixed(2) + 'deg');
        root.style.setProperty('--tiltX', ((.5 - y / rect.height) * 10).toFixed(2) + 'deg');
      }
    };
    window.addEventListener('mousemove', mouseHandler);

    const chapters = Array.from(document.querySelectorAll('.chapter')) as HTMLElement[];
    const navItems = Array.from(document.querySelectorAll('.nav-links a')) as HTMLAnchorElement[];
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          chapters.forEach(sec => {
            sec.classList.remove('active','past');
            if(sec.offsetTop < (entry.target as HTMLElement).offsetTop) sec.classList.add('past');
          });
          (entry.target as HTMLElement).classList.add('active');
          navItems.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + (entry.target as HTMLElement).id));
        }
      });
    }, { threshold: .58 });
    chapters.forEach(sec => io.observe(sec));

    document.querySelectorAll('.tab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const target = (btn as HTMLElement).dataset.tab;
        if (target) document.getElementById(target)?.classList.add('active');
      });
    });
    document.querySelectorAll('.mission').forEach(card => card.addEventListener('click', () => card.classList.toggle('open')));

    const cnBase = '李雨帆';
    const enBase = 'Sail';
    const cnGlyphs = ['数','据','策','略','增','长','析','模','型','⟡','✦','✧','◌','◇','◆'];
    const enGlyphs = ['S','A','I','L','0','1','∆','λ','Σ','∞','◈','✦','/','_'];
    function scrambleText(el: HTMLElement | null, finalText: string, glyphs: string[], duration = 820){
      if (!el) return;
      let frame = 0;
      const total = 22;
      const original = finalText.split('');
      const timer = setInterval(() => {
        const progress = frame / total;
        el.textContent = original.map((ch, idx) => {
          const lockPoint = idx / original.length * .48 + .30;
          if(progress > lockPoint) return ch;
          if(ch === ' ') return ' ';
          return glyphs[Math.floor(Math.random() * glyphs.length)];
        }).join('');
        frame++;
        if(frame > total){ clearInterval(timer); el.textContent = finalText; }
      }, duration / total);
    }
    function animateName(){
      const stage = document.getElementById('nameStage');
      const cn = document.getElementById('nameCn');
      const en = document.getElementById('nameEn');
      if (!stage) return;
      stage.classList.add(Math.random() > .5 ? 'decoding' : 'scanline');
      scrambleText(cn, cnBase, cnGlyphs);
      scrambleText(en, enBase, enGlyphs);
      setTimeout(() => stage.className = 'name-stage', 920);
    }
    const nameTimer = setInterval(animateName, 2000);

    const motto = ['dashboards.', 'growth strategies.', 'decision signals.', 'business insights.', 'data products.'];
    let mi = 0;
    const mottoTimer = setInterval(() => {
      mi = (mi + 1) % motto.length;
      const el = document.getElementById('mottoWord') as HTMLElement | null;
      if(!el) return;
      el.style.opacity = '0';
      setTimeout(() => { el.textContent = motto[mi]; el.style.opacity = '1'; }, 220);
    }, 1800);

    return () => {
      window.removeEventListener('mousemove', mouseHandler);
      io.disconnect();
      clearInterval(nameTimer);
      clearInterval(mottoTimer);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
