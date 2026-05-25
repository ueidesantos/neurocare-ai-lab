/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // gera pasta /out com HTML estático
  basePath: '/neurocare-ai-lab', // nome exato do seu repositório
  images: {
    unoptimized: true,    // GitHub Pages não suporta otimização de imagem
  },
}

export default nextConfig