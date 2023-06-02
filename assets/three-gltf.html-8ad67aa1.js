import{_ as n,o as s,c as a,e as t}from"./app-4d55993c.js";const p={},e=t(`<h1 id="threejs模型渲染" tabindex="-1"><a class="header-anchor" href="#threejs模型渲染" aria-hidden="true">#</a> ThreeJs模型渲染</h1><p>::: playground#vue threejs模型渲染</p><p>@file App.vue</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sk-chase<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sk-chase-dot<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sk-chase-dot<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sk-chase-dot<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sk-chase-dot<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sk-chase-dot<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sk-chase-dot<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>加载资源中...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>three-wrapper<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span> <span class="token property">overflow</span><span class="token punctuation">:</span> hidden</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">THREE</span> <span class="token keyword">from</span> <span class="token string">&#39;three&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> GLTFLoader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;three/addons/loaders/GLTFLoader&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> OrbitControls <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;three/addons/controls/OrbitControls.js&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">ThreeHelper</span> <span class="token punctuation">{</span>
  dom <span class="token operator">=</span> <span class="token keyword">null</span>
  camera <span class="token operator">=</span> <span class="token keyword">null</span>
  renderer <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token comment">// 导入的3D模型</span>
  model <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token comment">// 需要处理朝向的物体</span>
  lookAtList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// 需要自转的物体</span>
  rotationList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  plane <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">dom<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dom <span class="token operator">=</span> dom
    <span class="token keyword">this</span><span class="token punctuation">.</span>scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">clientWidth</span><span class="token operator">:</span> width<span class="token punctuation">,</span> <span class="token literal-property property">clientHeight</span><span class="token operator">:</span> height <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dom
    <span class="token keyword">this</span><span class="token punctuation">.</span>camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PerspectiveCamera</span><span class="token punctuation">(</span><span class="token number">55</span><span class="token punctuation">,</span> width <span class="token operator">/</span> height<span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">300000</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">600</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">50</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">800</span>

    <span class="token comment">// this.scene.add(new THREE.AmbientLight(0x666666, 0.5));</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>AmbientLight</span><span class="token punctuation">(</span><span class="token number">0xffffff</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>renderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>WebGLRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">antialias</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>renderer<span class="token punctuation">.</span>outputEncoding <span class="token operator">=</span> <span class="token constant">THREE</span><span class="token punctuation">.</span>sRGBEncoding
    <span class="token keyword">this</span><span class="token punctuation">.</span>renderer<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>renderer<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span>
    <span class="token keyword">const</span> controls <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrbitControls</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>camera<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>renderer<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span>
    controls<span class="token punctuation">.</span>minPolarAngle <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">3</span> <span class="token comment">//你能够垂直旋转的角度的下限</span>
    controls<span class="token punctuation">.</span>maxPolarAngle <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">3</span> <span class="token comment">//你能够垂直旋转的角度的上限</span>
    controls<span class="token punctuation">.</span>enableDamping <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">//是否开启阻尼效果</span>
    controls<span class="token punctuation">.</span>dampingFactor <span class="token operator">=</span> <span class="token number">0.25</span> <span class="token comment">//阻尼系数，越小阻力就越大</span>
    controls<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> manager <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLoadingManager</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span>

    <span class="token keyword">const</span> loader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GLTFLoader</span><span class="token punctuation">(</span>manager<span class="token punctuation">)</span>
    <span class="token keyword">var</span> self <span class="token operator">=</span> <span class="token keyword">this</span>

    loader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>
      <span class="token string">&#39;https://xly-fe.oss-cn-beijing.aliyuncs.com/deploy/official-web/scene-0215.glb&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// &quot;//caigouzi1.github.io/blog/scene.glb&quot;,</span>
      <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        self<span class="token punctuation">.</span>model <span class="token operator">=</span> model<span class="token punctuation">.</span>scene
        self<span class="token punctuation">.</span>model<span class="token punctuation">.</span>position<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">100</span>

        self<span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token function">traverse</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">child</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>userData<span class="token punctuation">.</span>script<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> scripts <span class="token operator">=</span> child<span class="token punctuation">.</span>userData<span class="token punctuation">.</span>script
            scripts<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>isMesh <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                child<span class="token punctuation">.</span>frustumCulled <span class="token operator">=</span> <span class="token boolean">false</span>
                <span class="token comment">// 模型阴影</span>
                child<span class="token punctuation">.</span>castShadow <span class="token operator">=</span> <span class="token boolean">true</span>
                <span class="token comment">// 模型自发光</span>
                <span class="token comment">// child.material.emissive = child.material.color;</span>
                <span class="token comment">// child.material.emissiveMap = child.material.map;</span>
              <span class="token punctuation">}</span>

              <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;旋转&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
                self<span class="token punctuation">.</span>rotationList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">model</span><span class="token operator">:</span> child<span class="token punctuation">,</span> <span class="token literal-property property">config</span><span class="token operator">:</span> item <span class="token punctuation">}</span><span class="token punctuation">)</span>
              <span class="token punctuation">}</span>

              <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;看向相机&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                child<span class="token punctuation">.</span><span class="token function">lookAt</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>camera<span class="token punctuation">.</span>position<span class="token punctuation">)</span>
                self<span class="token punctuation">.</span>lookAtList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>model<span class="token punctuation">.</span>scene<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token parameter">xhr</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// console.log(&#39;加载完成的百分比&#39; + (xhr.loaded / xhr.total * 100) + &#39;%&#39;)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>renderer<span class="token punctuation">.</span><span class="token function">setClearColor</span><span class="token punctuation">(</span><span class="token string">&#39;#c8e6f9&#39;</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>scene<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>camera<span class="token punctuation">)</span>

    window<span class="token punctuation">.</span><span class="token function-variable function">onresize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">clientWidth</span><span class="token operator">:</span> width<span class="token punctuation">,</span> <span class="token literal-property property">clientHeight</span><span class="token operator">:</span> height <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dom
      <span class="token keyword">this</span><span class="token punctuation">.</span>camera<span class="token punctuation">.</span>aspect <span class="token operator">=</span> width <span class="token operator">/</span> height
      <span class="token keyword">this</span><span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">updateProjectionMatrix</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>renderer<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>scene<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>camera<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">onMouseClick</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> raycaster <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Raycaster</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> mouse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Vector2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">clientWidth</span><span class="token operator">:</span> width<span class="token punctuation">,</span> <span class="token literal-property property">clientHeight</span><span class="token operator">:</span> height <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dom

    <span class="token comment">//将鼠标点击位置的屏幕坐标转换成threejs中的标准坐标</span>
    mouse<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>offsetX <span class="token operator">/</span> width<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span>
    mouse<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token operator">-</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>offsetY <span class="token operator">/</span> height<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span>

    <span class="token comment">// 通过鼠标点的位置和当前相机的矩阵计算出raycaster</span>
    raycaster<span class="token punctuation">.</span><span class="token function">setFromCamera</span><span class="token punctuation">(</span>mouse<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>camera<span class="token punctuation">)</span>

    <span class="token comment">// 获取raycaster直线和所有模型相交的数组集合</span>
    <span class="token keyword">var</span> intersects <span class="token operator">=</span> raycaster<span class="token punctuation">.</span><span class="token function">intersectObjects</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>scene<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> intersects<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>intersects<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>object<span class="token punctuation">.</span>userData<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rotationList <span class="token operator">&amp;&amp;</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rotationList<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>rotationList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        item<span class="token punctuation">.</span>model<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>y <span class="token operator">-=</span> <span class="token number">0.1</span> <span class="token operator">/</span> item<span class="token punctuation">.</span>config<span class="token punctuation">.</span>time
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>lookAtList <span class="token operator">&amp;&amp;</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>lookAtList<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> position <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>camera<span class="token punctuation">.</span>position
      <span class="token keyword">this</span><span class="token punctuation">.</span>lookAtList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span><span class="token function">lookAt</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>scene<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>camera<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">getLoadingManager</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> manager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>LoadingManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    manager<span class="token punctuation">.</span><span class="token function-variable function">onStart</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> itemsLoaded<span class="token punctuation">,</span> itemsTotal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">isLoading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">progress</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    manager<span class="token punctuation">.</span><span class="token function-variable function">onLoad</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Loading complete!&#39;</span><span class="token punctuation">)</span>
      callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">isLoading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">progress</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    manager<span class="token punctuation">.</span><span class="token function-variable function">onProgress</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> itemsLoaded<span class="token punctuation">,</span> itemsTotal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      callback <span class="token operator">&amp;&amp;</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">isLoading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">progress</span><span class="token operator">:</span> <span class="token punctuation">(</span>itemsLoaded <span class="token operator">/</span> itemsTotal<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    manager<span class="token punctuation">.</span><span class="token function-variable function">onError</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;There was an error loading &#39;</span> <span class="token operator">+</span> url<span class="token punctuation">)</span>
      callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">isLoading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">progress</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> manager
  <span class="token punctuation">}</span>

  <span class="token function">runAnimate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> threeWrapper <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#three-wrapper&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">var</span> threeInstants <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreeHelper</span><span class="token punctuation">(</span>threeWrapper<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>params<span class="token punctuation">.</span>isLoading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#loading&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  threeInstants<span class="token punctuation">.</span><span class="token function">runAnimate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  threeWrapper<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> threeInstants<span class="token punctuation">.</span><span class="token function">onMouseClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>threeInstants<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">#loading</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 999<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #010826<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #409eff<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #c8e6f9<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> zoomOut</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">50%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale3d</span><span class="token punctuation">(</span>1.3<span class="token punctuation">,</span> 1.3<span class="token punctuation">,</span> 1.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">to</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">#loading.out</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> zoomOut 0.5s linear forwards<span class="token punctuation">;</span>
  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#loading.out .sk-chase-dot,
#loading.out .sk-chase</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> null<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase</span> <span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> sk-chase 2.5s infinite linear both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.sk-chase-dot</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> sk-chase-dot 2s infinite ease-in-out both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.sk-chase-dot::before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #409eff<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> sk-chase-dot-before 2s infinite ease-in-out both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(1)</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -1.1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(2)</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(3)</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -0.9s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(4)</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -0.8s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(5)</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -0.7s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(6)</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -0.6s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(1):before</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -1.1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(2):before</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(3):before</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -0.9s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(4):before</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -0.8s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(5):before</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -0.7s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(6):before</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -0.6s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.sk-chase-dot .sk-chase-dot:nth-child(2)</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(3)</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -0.9s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(4)</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -0.8s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(5)</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -0.7s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(6)</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -0.6s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(1):before</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -1.1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(2):before</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(3):before</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -0.9s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(4):before</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -0.8s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(5):before</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -0.7s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sk-chase-dot:nth-child(6):before</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -0.6s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> sk-chase</span> <span class="token punctuation">{</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> sk-chase-dot</span> <span class="token punctuation">{</span>
  <span class="token selector">80%,
  100%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> sk-chase-dot-before</span> <span class="token punctuation">{</span>
  <span class="token selector">50%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%,
  0%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@import</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;imports&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://sfc.vuejs.org/vue.runtime.esm-browser.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;three&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://unpkg.com/three@0.151.3/build/three.module.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;three/addons/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://unpkg.com/three@0.151.3/examples/jsm/&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,7),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","three-gltf.html.vue"]]);export{k as default};
