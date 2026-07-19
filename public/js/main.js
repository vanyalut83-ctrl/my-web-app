const supabaseUrl = "https://kxhnndscpqmiembmfjzx.supabase.co/rest/v1/";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4aG5uZHNjcHFtaWVtYm1manp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0NjQ3NDgsImV4cCI6MjEwMDA0MDc0OH0.OSFE4ocBaaBMGT_uxu1M2u331iIitnCRuoae9hU80JI";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function addProduct() {
  const name = document.getElementById("name").value;
  const cost = document.getElementById("cost").value;
  const price = document.getElementById("price").value;

  await supabase.from("products").insert([
    { name, cost, price }
  ]);

  loadProducts();
}

async function loadProducts() {
  const { data } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: false });

  const container = document.getElementById("products");
  container.innerHTML = "";

  data.forEach(product => {
    const profit = product.price - product.cost;

    container.innerHTML += `
      <div class="product">
        <strong>${product.name}</strong><br>
        Статус: ${product.status}<br>
        Собівартість: ${product.cost} грн<br>
        Продаж: ${product.price} грн<br>
        Прибуток: ${profit} грн
      </div>
    `;
  });
}

loadProducts();