const schoolMeta = {
  清华大学: ["北京", "北京", "华北", 116.326, 40.003],
  北京大学: ["北京", "北京", "华北", 116.305, 39.992],
  北京化工大学: ["北京", "北京", "华北", 116.427, 39.971],
  北京理工大学: ["北京", "北京", "华北", 116.316, 39.959],
  首都师范大学: ["北京", "北京", "华北", 116.309, 39.93],
  北京交通大学: ["北京", "北京", "华北", 116.347, 39.951],
  华北电力大学: ["北京", "北京", "华北", 116.296, 40.094],
  北京航空航天大学: ["北京", "北京", "华北", 116.347, 39.982],
  天津大学: ["天津", "天津", "华北", 117.178, 39.111],
  天津理工大学: ["天津", "天津", "华北", 117.134, 39.067],
  河北工业大学: ["天津", "天津", "华北", 117.155, 39.178],
  燕山大学: ["河北", "秦皇岛", "华北", 119.516, 39.906],
  山西大学: ["山西", "太原", "华北", 112.59, 37.806],
  大连理工大学: ["辽宁", "大连", "东北", 121.525, 38.879],
  东北大学: ["辽宁", "沈阳", "东北", 123.421, 41.767],
  吉林农业大学: ["吉林", "长春", "东北", 125.414, 43.809],
  东北农业大学: ["黑龙江", "哈尔滨", "东北", 126.728, 45.742],
  哈尔滨工业大学: ["黑龙江", "哈尔滨", "东北", 126.632, 45.747],
  哈尔滨工程大学: ["黑龙江", "哈尔滨", "东北", 126.684, 45.776],
  上海交通大学: ["上海", "上海", "华东", 121.439, 31.025],
  上海理工大学: ["上海", "上海", "华东", 121.556, 31.286],
  复旦大学: ["上海", "上海", "华东", 121.503, 31.297],
  同济大学: ["上海", "上海", "华东", 121.506, 31.282],
  华东理工大学: ["上海", "上海", "华东", 121.425, 31.143],
  上海大学: ["上海", "上海", "华东", 121.393, 31.319],
  东南大学: ["江苏", "南京", "华东", 118.797, 32.061],
  江南大学: ["江苏", "无锡", "华东", 120.28, 31.48],
  南京理工大学: ["江苏", "南京", "华东", 118.857, 32.032],
  苏州大学: ["江苏", "苏州", "华东", 120.641, 31.305],
  江苏大学: ["江苏", "镇江", "华东", 119.514, 32.202],
  南京大学: ["江苏", "南京", "华东", 118.959, 32.114],
  中国矿业大学: ["江苏", "徐州", "华东", 117.143, 34.216],
  中国药科大学: ["江苏", "南京", "华东", 118.911, 31.912],
  南京航空航天大学: ["江苏", "南京", "华东", 118.82, 32.034],
  浙江大学: ["浙江", "杭州", "华东", 120.086, 30.309],
  浙江工业大学: ["浙江", "杭州", "华东", 120.044, 30.228],
  杭州电子科技大学: ["浙江", "杭州", "华东", 120.344, 30.316],
  安徽工业大学: ["安徽", "马鞍山", "华东", 118.515, 31.685],
  中国科学技术大学: ["安徽", "合肥", "华东", 117.269, 31.839],
  福州大学: ["福建", "福州", "华东", 119.196, 26.06],
  厦门大学: ["福建", "厦门", "华东", 118.103, 24.435],
  南昌大学: ["江西", "南昌", "华东", 115.82, 28.661],
  山东大学: ["山东", "济南", "华东", 117.06, 36.675],
  山东科技大学: ["山东", "青岛", "华东", 120.131, 35.95],
  山东理工大学: ["山东", "淄博", "华东", 118.002, 36.811],
  青岛科技大学: ["山东", "青岛", "华东", 120.433, 36.118],
  河南科技大学: ["河南", "洛阳", "华中", 112.395, 34.658],
  "中国地质大学（武汉）": ["湖北", "武汉", "华中", 114.4, 30.52],
  华中农业大学: ["湖北", "武汉", "华中", 114.356, 30.475],
  武汉科技大学: ["湖北", "武汉", "华中", 114.343, 30.626],
  华中科技大学: ["湖北", "武汉", "华中", 114.407, 30.514],
  武汉理工大学: ["湖北", "武汉", "华中", 114.354, 30.531],
  湖南大学: ["湖南", "长沙", "华中", 112.944, 28.183],
  中山大学: ["广东", "广州", "华南", 113.298, 23.096],
  华南理工大学: ["广东", "广州", "华南", 113.347, 23.151],
  华南农业大学: ["广东", "广州", "华南", 113.356, 23.158],
  暨南大学: ["广东", "广州", "华南", 113.35, 23.128],
  桂林电子科技大学: ["广西", "桂林", "华南", 110.314, 25.289],
  重庆理工大学: ["重庆", "重庆", "西南", 106.533, 29.501],
  重庆大学: ["重庆", "重庆", "西南", 106.469, 29.57],
  四川大学: ["四川", "成都", "西南", 104.086, 30.636],
  西南交通大学: ["四川", "成都", "西南", 103.985, 30.766],
  四川轻化工大学: ["四川", "自贡", "西南", 104.779, 29.339],
  贵州医科大学: ["贵州", "贵阳", "西南", 106.631, 26.646],
  昆明理工大学: ["云南", "昆明", "西南", 102.858, 24.849],
  西安交通大学: ["陕西", "西安", "西北", 108.984, 34.247],
  长安大学: ["陕西", "西安", "西北", 108.947, 34.235],
  西北工业大学: ["陕西", "西安", "西北", 108.914, 34.244],
  西北大学: ["陕西", "西安", "西北", 108.936, 34.255],
  西安电子科技大学: ["陕西", "西安", "西北", 108.841, 34.126],
  新疆大学: ["新疆", "乌鲁木齐", "西北", 87.616, 43.824],
};

const state = {
  schools: [],
  filtered: [],
  selected: null,
  provinceGeojson: null,
  batch: "全部",
  region: "全部",
  search: "",
  verifiedOnly: false,
};

const el = {
  search: document.querySelector("#searchInput"),
  region: document.querySelector("#regionSelect"),
  verified: document.querySelector("#verifiedOnly"),
  map: document.querySelector("#mapCanvas"),
  bars: document.querySelector("#provinceBars"),
  rows: document.querySelector("#schoolRows"),
  tableCount: document.querySelector("#tableCount"),
  activeSummary: document.querySelector("#activeSummary"),
  activeHint: document.querySelector("#activeHint"),
  metrics: {
    total: document.querySelector("#metricTotal"),
    tto: document.querySelector("#metricTto"),
    province: document.querySelector("#metricProvince"),
    first: document.querySelector("#metricFirst"),
  },
  detail: {
    title: document.querySelector("#detailTitle"),
    meta: document.querySelector("#detailMeta"),
    tto: document.querySelector("#detailTto"),
    place: document.querySelector("#detailPlace"),
    contact: document.querySelector("#detailContact"),
    notes: document.querySelector("#detailNotes"),
    ttoLink: document.querySelector("#detailTtoLink"),
    evidenceLink: document.querySelector("#detailEvidenceLink"),
  },
};

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"' && quoted && next === '"') {
      value += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(value);
      if (row.some((cell) => cell.trim() !== "")) rows.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }

  if (value || row.length) {
    row.push(value);
    rows.push(row);
  }

  const headers = rows.shift();
  return rows.map((cells) =>
    Object.fromEntries(headers.map((header, index) => [header, cells[index] || ""])),
  );
}

function enrich(row, index) {
  const meta = schoolMeta[row.university] || ["待核验", "待核验", "其他", 105, 35];
  return {
    ...row,
    id: `${row.university}-${index}`,
    province: meta[0],
    city: meta[1],
    region: meta[2],
    lon: meta[3],
    lat: meta[4],
    hasTto: Boolean(row.tto_name || row.tto_url),
    hasContact: Boolean(row.contact || row.phone || row.email),
  };
}

function project(lon, lat) {
  const minLon = 73;
  const maxLon = 135;
  const minLat = 17;
  const maxLat = 54;
  const x = 58 + ((lon - minLon) / (maxLon - minLon)) * 680;
  const y = 552 - ((lat - minLat) / (maxLat - minLat)) * 476;
  return [x, y];
}

function normalizeProvince(name) {
  return name
    .replace(/特别行政区$/, "")
    .replace(/维吾尔自治区$/, "")
    .replace(/壮族自治区$/, "")
    .replace(/回族自治区$/, "")
    .replace(/自治区$/, "")
    .replace(/[省市]$/, "");
}

function ringPath(ring) {
  return ring
    .map(([lon, lat], index) => {
      const [x, y] = project(lon, lat);
      return `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ")
    .concat(" Z");
}

function geometryPath(geometry) {
  if (!geometry) return "";
  if (geometry.type === "Polygon") {
    return geometry.coordinates.map(ringPath).join(" ");
  }
  if (geometry.type === "MultiPolygon") {
    return geometry.coordinates
      .flatMap((polygon) => polygon.map(ringPath))
      .join(" ");
  }
  return "";
}

function applyFilters() {
  const needle = state.search.trim().toLowerCase();
  state.filtered = state.schools.filter((school) => {
    const haystack = [
      school.university,
      school.tto_name,
      school.province,
      school.city,
      school.notes,
    ]
      .join(" ")
      .toLowerCase();
    return (
      (state.batch === "全部" || school.batch === state.batch) &&
      (state.region === "全部" || school.region === state.region) &&
      (!state.verifiedOnly || school.hasTto) &&
      (!needle || haystack.includes(needle))
    );
  });

  if (!state.filtered.some((school) => state.selected && school.id === state.selected.id)) {
    state.selected = state.filtered[0] || null;
  }

  render();
}

function render() {
  renderMetrics();
  renderMap();
  renderBars();
  renderTable();
  renderDetail(state.selected);
}

function renderMetrics() {
  const total = state.filtered.length;
  const tto = state.filtered.filter((school) => school.hasTto).length;
  const provinces = new Set(state.filtered.map((school) => school.province)).size;
  const first = state.filtered.filter((school) => school.batch === "首批").length;
  const firstRate = total ? `${Math.round((first / total) * 100)}%` : "--";

  el.metrics.total.textContent = total;
  el.metrics.tto.textContent = tto;
  el.metrics.province.textContent = provinces;
  el.metrics.first.textContent = firstRate;
  el.activeSummary.textContent = `${total} 所高校 · ${provinces} 个省级区域`;
  el.activeHint.textContent = state.selected
    ? `当前聚焦：${state.selected.university}`
    : "没有符合条件的高校";
}

function renderMap() {
  const selectedId = state.selected?.id;
  const provinceCounts = state.filtered.reduce((acc, school) => {
    acc[school.province] = (acc[school.province] || 0) + 1;
    return acc;
  }, {});
  const maxProvinceCount = Math.max(...Object.values(provinceCounts), 1);
  const provinces =
    state.provinceGeojson?.features
      ?.map((feature) => {
        const rawName = feature.properties?.地名 || feature.properties?.name || "";
        const province = normalizeProvince(rawName);
        const count = provinceCounts[province] || 0;
        const alpha = count ? 0.28 + (count / maxProvinceCount) * 0.5 : 0.1;
        const fill = count ? `rgba(15, 140, 140, ${alpha.toFixed(2)})` : "rgba(228, 237, 239, 0.86)";
        return `
          <path class="province-shape ${count ? "has-schools" : ""}" d="${geometryPath(feature.geometry)}" fill="${fill}">
            <title>${rawName}${count ? ` · ${count} 所高校` : ""}</title>
          </path>
        `;
      })
      .join("") || "";
  const points = state.filtered
    .map((school, index) => {
      const [x, y] = project(school.lon + (index % 4) * 0.22, school.lat + (index % 3) * 0.18);
      const color = school.batch === "首批" ? "#0f8c8c" : "#e85d4f";
      const active = school.id === selectedId ? "active" : "";
      return `
        <g class="school-point ${active}" data-id="${school.id}" tabindex="0" role="button" aria-label="${school.university}">
          <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${school.hasTto ? 6 : 4.6}" fill="${color}" stroke="#fff" stroke-width="2.4"></circle>
          <title>${school.university} · ${school.province} · ${school.batch}</title>
        </g>
      `;
    })
    .join("");

  el.map.innerHTML = `
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
      <defs>
        <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
          <path d="M 42 0 L 0 0 0 42" fill="none" stroke="#c9d8df" stroke-width="0.7" opacity="0.55"></path>
        </pattern>
      </defs>
      <rect width="800" height="600" fill="url(#grid)"></rect>
      <g class="province-layer">${provinces}</g>
      <text x="135" y="160" class="map-label">西北</text>
      <text x="510" y="176" class="map-label">华北 / 东北</text>
      <text x="540" y="355" class="map-label">华东</text>
      <text x="435" y="398" class="map-label">华中</text>
      <text x="360" y="480" class="map-label">西南</text>
      <text x="570" y="470" class="map-label">华南</text>
      ${points}
    </svg>
  `;

  el.map.querySelectorAll(".school-point").forEach((point) => {
    point.addEventListener("click", () => selectSchool(point.dataset.id));
    point.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") selectSchool(point.dataset.id);
    });
  });
}

function renderBars() {
  const counts = state.filtered.reduce((acc, school) => {
    acc[school.province] = (acc[school.province] || 0) + 1;
    return acc;
  }, {});
  const entries = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  const max = Math.max(...entries.map((entry) => entry[1]), 1);

  el.bars.innerHTML =
    entries
      .map(
        ([province, count]) => `
          <div class="bar-row">
            <span>${province}</span>
            <div class="bar-track"><div class="bar-fill" style="width:${(count / max) * 100}%"></div></div>
            <strong>${count}</strong>
          </div>
        `,
      )
      .join("") || `<div class="empty-state">暂无匹配数据</div>`;
}

function renderTable() {
  el.tableCount.textContent = state.filtered.length;
  el.rows.innerHTML =
    state.filtered
      .map(
        (school) => `
          <tr data-id="${school.id}">
            <td><strong>${school.university}</strong><br><small>${school.city}</small></td>
            <td><span class="batch-pill ${school.batch === "首批" ? "first" : "second"}">${school.batch}</span></td>
            <td>${school.province}</td>
            <td>${school.tto_name || "待补充"}</td>
            <td>${formatContact(school) || "待补充"}</td>
          </tr>
        `,
      )
      .join("") || `<tr><td colspan="5" class="empty-state">暂无匹配数据</td></tr>`;

  el.rows.querySelectorAll("tr[data-id]").forEach((row) => {
    row.addEventListener("click", () => selectSchool(row.dataset.id));
  });
}

function renderDetail(school) {
  if (!school) {
    el.detail.title.textContent = "暂无匹配高校";
    el.detail.meta.textContent = "调整筛选条件后可继续查看地图。";
    el.detail.tto.textContent = "--";
    el.detail.place.textContent = "--";
    el.detail.contact.textContent = "--";
    el.detail.notes.textContent = "--";
    setLink(el.detail.ttoLink, "");
    setLink(el.detail.evidenceLink, "");
    return;
  }

  el.detail.title.textContent = school.university;
  el.detail.meta.textContent = `${school.batch} · ${school.region} · ${school.province}${school.city ? ` / ${school.city}` : ""}`;
  el.detail.tto.textContent = school.tto_name || "待补充";
  el.detail.place.textContent = `${school.province} ${school.city}`;
  el.detail.contact.textContent = formatContact(school) || "待补充";
  el.detail.notes.textContent = school.notes || "暂无备注";
  setLink(el.detail.ttoLink, school.tto_url);
  setLink(el.detail.evidenceLink, school.evidence_url);
}

function formatContact(school) {
  return [school.contact, school.phone, school.email, school.address].filter(Boolean).join(" · ");
}

function setLink(anchor, url) {
  if (url) {
    anchor.href = url;
    anchor.classList.remove("disabled");
  } else {
    anchor.href = "#";
    anchor.classList.add("disabled");
  }
}

function selectSchool(id) {
  state.selected = state.schools.find((school) => school.id === id) || null;
  render();
}

function bindEvents() {
  el.search.addEventListener("input", (event) => {
    state.search = event.target.value;
    applyFilters();
  });

  el.region.addEventListener("change", (event) => {
    state.region = event.target.value;
    applyFilters();
  });

  el.verified.addEventListener("change", (event) => {
    state.verifiedOnly = event.target.checked;
    applyFilters();
  });

  document.querySelectorAll(".segment").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.batch = button.dataset.batch;
      applyFilters();
    });
  });
}

async function init() {
  const [response, geoResponse] = await Promise.all([
    fetch("./china_university_tto_seed.csv?v=20260516-geo"),
    fetch("./data/china-provinces.geojson?v=20260516-geo"),
  ]);
  const text = await response.text();
  state.provinceGeojson = await geoResponse.json();
  state.schools = parseCsv(text).map(enrich);
  state.selected = state.schools[0];
  bindEvents();
  applyFilters();
}

init().catch((error) => {
  el.map.innerHTML = `<div class="empty-state">数据载入失败：${error.message}</div>`;
});
