const assetPathPrefix = "/assets"
const imgScanLine = `${assetPathPrefix}/acc30.svg`
const imgLayoutDashboard = `${assetPathPrefix}/d8b30.svg`
const imgScanLine1 = `${assetPathPrefix}/888c3.svg`
const imgHistory = `${assetPathPrefix}/ed6d6.svg`
const imgGraduationCap = `${assetPathPrefix}/3e758.svg`
const imgBox = `${assetPathPrefix}/6eeb4.svg`
const imgInfo = `${assetPathPrefix}/5a10f.svg`
const imgPause = `${assetPathPrefix}/fdb94.svg`
const imgCamera = `${assetPathPrefix}/e8452.svg`
const imgLayers = `${assetPathPrefix}/21900.svg`
const imgIndicador = `${assetPathPrefix}/f34db.svg`
const imgSetaDeMovimento = `${assetPathPrefix}/446ee.svg`
const imgChamadaDoMaterial = `${assetPathPrefix}/a5068.svg`
const imgCampoVisualIlustrativo = `${assetPathPrefix}/04a6d.svg`
const imgFioDeElasticoLongoEGrosso = `${assetPathPrefix}/47c7c.svg`
const imgRolete = `${assetPathPrefix}/7f21e.svg`
const imgIndicadorVirtual = `${assetPathPrefix}/8ab03.svg`
const imgPlay = `${assetPathPrefix}/a8d31.svg`
const imgSquare = `${assetPathPrefix}/c7572.svg`
const imgHistory1 = `${assetPathPrefix}/311b0.svg`
const imgMousePointer2 = `${assetPathPrefix}/41207.svg`

export default function PainelInicial() {
  return (
    <div
      className="bg-[#f2f4f6] content-stretch flex items-start relative size-full"
      data-node-id="2:1221"
      data-name="Painel inicial"
    >
      <div
        className="bg-[#171d25] content-stretch flex flex-col gap-[32px] items-start min-h-[1040px] overflow-clip pb-[24px] pt-[32px] px-[20px] relative self-stretch shrink-0 w-[240px]"
        data-node-id="2:1222"
        data-name="Navegação principal"
      >
        <div
          className="content-stretch flex gap-[10px] items-center overflow-clip px-[4px] relative shrink-0"
          data-node-id="2:1223"
          data-name="Identidade do projeto"
        >
          <div
            className="bg-[#225fdb] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[36px]"
            data-node-id="2:1224"
            data-name="Marca"
          >
            <div
              className="relative shrink-0 size-[22px]"
              data-node-id="2:1698"
              data-name="scan-line"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgScanLine}
              />
            </div>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[3px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap"
            data-node-id="2:1226"
            data-name="Identificação"
          >
            <p
              className="relative shrink-0 text-[19px] text-white"
              data-node-id="2:1227"
            >
              SIC
            </p>
            <p
              className="relative shrink-0 text-[#adb8c7] text-[10px]"
              data-node-id="2:1228"
            >
              PROJETO ESCOLAR
            </p>
          </div>
        </div>
        <div
          className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip px-[4px] relative shrink-0 w-full"
          data-node-id="2:1229"
          data-name="Nome do sistema"
        >
          <p
            className="font-['Inter:Semi_Bold'] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[17px] text-white w-[min-content]"
            data-node-id="2:1230"
          >
            Sistema de Identificação de Contaminantes
          </p>
          <p
            className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[#adb8c7] text-[11px] whitespace-nowrap"
            data-node-id="2:1231"
          >
            Modelo demonstrativo • v1.0
          </p>
        </div>
        <div
          className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full"
          data-node-id="2:1232"
          data-name="Páginas"
        >
          <div
            className="bg-[#225fdb] content-stretch flex gap-[12px] h-[48px] items-center overflow-clip px-[14px] relative rounded-[6px] shrink-0 w-full"
            data-node-id="2:1233"
            data-name="Item de navegação"
          >
            <div
              className="relative shrink-0 size-[19px]"
              data-node-id="2:1701"
              data-name="layout-dashboard"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgLayoutDashboard}
              />
            </div>
            <p
              className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap"
              data-node-id="2:1235"
            >
              Painel inicial
            </p>
          </div>
          <div
            className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[12px] h-[48px] items-center overflow-clip px-[14px] relative rounded-[6px] shrink-0 w-full"
            data-node-id="2:1236"
            data-name="Item de navegação"
          >
            <div
              className="relative shrink-0 size-[19px]"
              data-node-id="2:1704"
              data-name="scan-line"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgScanLine1}
              />
            </div>
            <p
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#adb8c7] text-[14px] whitespace-nowrap"
              data-node-id="2:1238"
            >
              Detecção
            </p>
          </div>
          <div
            className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[12px] h-[48px] items-center overflow-clip px-[14px] relative rounded-[6px] shrink-0 w-full"
            data-node-id="2:1239"
            data-name="Item de navegação"
          >
            <div
              className="relative shrink-0 size-[19px]"
              data-node-id="2:1707"
              data-name="history"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgHistory}
              />
            </div>
            <p
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#adb8c7] text-[14px] whitespace-nowrap"
              data-node-id="2:1241"
            >
              Histórico
            </p>
          </div>
        </div>
        <div
          className="bg-[#242d39] content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative rounded-[6px] shrink-0 w-full"
          data-node-id="2:1242"
          data-name="Contexto escolar"
        >
          <div
            className="relative shrink-0 size-[20px]"
            data-node-id="2:1710"
            data-name="graduation-cap"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgGraduationCap}
            />
          </div>
          <p
            className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[12px] text-white w-[min-content]"
            data-node-id="2:1244"
          >
            Aprender pela simulação
          </p>
          <p
            className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#adb8c7] text-[11px] w-[min-content]"
            data-node-id="2:1245"
          >
            Uma representação visual do processo de identificação e separação de
            materiais.
          </p>
        </div>
        <div
          className="[word-break:break-word] absolute bottom-[28px] content-stretch flex flex-col gap-[8px] items-start leading-[normal] left-[24px] not-italic overflow-clip text-[#adb8c7] whitespace-nowrap"
          data-node-id="2:1246"
          data-name="Identificação da entrega"
        >
          <p
            className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[10px]"
            data-node-id="2:1247"
          >
            PROTÓTIPO VISUAL ESTÁTICO
          </p>
          <p
            className="font-['Inter:Regular'] font-normal relative shrink-0 text-[11px]"
            data-node-id="2:1248"
          >
            Sem conexão com equipamentos
          </p>
        </div>
      </div>
      <div
        className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative"
        data-node-id="2:1249"
        data-name="Área de trabalho"
      >
        <div
          className="bg-white border-[#dce1e7] border-b border-solid content-stretch flex h-[76px] items-center justify-between overflow-clip px-[40px] relative shrink-0 w-full"
          data-node-id="2:1250"
          data-name="Barra de contexto"
        >
          <div
            className="[word-break:break-word] content-stretch flex gap-[10px] items-center leading-[normal] not-italic overflow-clip relative shrink-0 text-[13px] whitespace-nowrap"
            data-node-id="2:1251"
            data-name="Localização"
          >
            <p
              className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#626e7d]"
              data-node-id="2:1252"
            >
              Demonstração
            </p>
            <p
              className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#9aa5b3]"
              data-node-id="2:1253"
            >
              /
            </p>
            <p
              className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#19212b]"
              data-node-id="2:1254"
            >
              Painel inicial
            </p>
          </div>
          <div
            className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0"
            data-node-id="2:1255"
            data-name="Modalidade"
          >
            <div
              className="relative shrink-0 size-[16px]"
              data-node-id="2:1713"
              data-name="box"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgBox}
              />
            </div>
            <p
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#626e7d] text-[11px] whitespace-nowrap"
              data-node-id="2:1257"
            >
              AMBIENTE ESCOLAR
            </p>
          </div>
        </div>
        <div
          className="content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[40px] py-[28px] relative shrink-0 w-full"
          data-node-id="2:1258"
          data-name="Conteúdo"
        >
          <div
            className="bg-[#eaf0ff] content-stretch flex gap-[14px] items-center overflow-clip px-[16px] py-[13px] relative rounded-[6px] shrink-0 w-full"
            data-node-id="2:1259"
            data-name="Aviso de simulação"
          >
            <div
              className="relative shrink-0 size-[18px]"
              data-node-id="2:1716"
              data-name="info"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgInfo}
              />
            </div>
            <p
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#225fdb] text-[11px] whitespace-nowrap"
              data-node-id="2:1261"
            >
              SIMULAÇÃO DIDÁTICA
            </p>
            <div
              className="bg-[#c3d2f6] h-[20px] relative shrink-0 w-px"
              data-node-id="2:1262"
              data-name="Divisor"
            />
            <p
              className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#626e7d] text-[12px] whitespace-nowrap"
              data-node-id="2:1263"
            >
              Sem reconhecimento real por câmera, integração com sensor ou visão
              computacional.
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap"
            data-node-id="2:1264"
            data-name="Cabeçalho"
          >
            <div
              className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0"
              data-node-id="2:1265"
              data-name="Apresentação"
            >
              <p
                className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#19212b] text-[30px]"
                data-node-id="2:1266"
              >
                Painel inicial
              </p>
              <p
                className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#626e7d] text-[13px]"
                data-node-id="2:1267"
              >
                Prepare a demonstração e acompanhe os estados do modelo.
              </p>
            </div>
            <p
              className="font-['IBM_Plex_Mono:Regular'] relative shrink-0 text-[#626e7d] text-[11px]"
              data-node-id="2:1268"
            >
              ETAPA 01 / 03
            </p>
          </div>
          <div
            className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full"
            data-node-id="2:1269"
            data-name="Estados do sistema"
          >
            <div
              className="bg-white border border-[#dce1e7] border-solid content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px overflow-clip p-[20px] relative rounded-[12px]"
              data-node-id="2:1270"
              data-name="Resumo de estado"
            >
              <div
                className="bg-[#f2f4f6] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[40px]"
                data-node-id="2:1271"
                data-name="Símbolo"
              >
                <div
                  className="relative shrink-0 size-[20px]"
                  data-node-id="2:1719"
                  data-name="pause"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgPause}
                  />
                </div>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-[7px] items-start leading-[normal] min-w-px not-italic overflow-clip relative"
                data-node-id="2:1273"
                data-name="Informação"
              >
                <p
                  className="relative shrink-0 text-[#626e7d] text-[12px] whitespace-nowrap"
                  data-node-id="2:1274"
                >
                  Esteira transportadora
                </p>
                <p
                  className="min-w-full relative shrink-0 text-[#19212b] text-[19px] w-[min-content]"
                  data-node-id="2:1275"
                >
                  Simulação pausada
                </p>
                <p
                  className="min-w-full relative shrink-0 text-[#626e7d] text-[11px] w-[min-content]"
                  data-node-id="2:1276"
                >
                  Modelo pronto para a demonstração
                </p>
              </div>
            </div>
            <div
              className="bg-white border border-[#dce1e7] border-solid content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px overflow-clip p-[20px] relative rounded-[12px]"
              data-node-id="2:1277"
              data-name="Resumo de estado"
            >
              <div
                className="bg-[#f2f4f6] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[40px]"
                data-node-id="2:1278"
                data-name="Símbolo"
              >
                <div
                  className="relative shrink-0 size-[20px]"
                  data-node-id="2:1722"
                  data-name="camera"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgCamera}
                  />
                </div>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-[7px] items-start leading-[normal] min-w-px not-italic overflow-clip relative"
                data-node-id="2:1280"
                data-name="Informação"
              >
                <p
                  className="relative shrink-0 text-[#626e7d] text-[12px] whitespace-nowrap"
                  data-node-id="2:1281"
                >
                  Câmera industrial
                </p>
                <p
                  className="min-w-full relative shrink-0 text-[#19212b] text-[19px] w-[min-content]"
                  data-node-id="2:1282"
                >
                  Representação virtual
                </p>
                <p
                  className="min-w-full relative shrink-0 text-[#626e7d] text-[11px] w-[min-content]"
                  data-node-id="2:1283"
                >
                  Sem captura ou análise de imagem
                </p>
              </div>
            </div>
            <div
              className="bg-white border border-[#dce1e7] border-solid content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px overflow-clip p-[20px] relative rounded-[12px]"
              data-node-id="2:1284"
              data-name="Resumo de estado"
            >
              <div
                className="bg-[#f2f4f6] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[40px]"
                data-node-id="2:1285"
                data-name="Símbolo"
              >
                <div
                  className="relative shrink-0 size-[20px]"
                  data-node-id="2:1725"
                  data-name="layers"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgLayers}
                  />
                </div>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-[7px] items-start leading-[normal] min-w-px not-italic overflow-clip relative"
                data-node-id="2:1287"
                data-name="Informação"
              >
                <p
                  className="relative shrink-0 text-[#626e7d] text-[12px] whitespace-nowrap"
                  data-node-id="2:1288"
                >
                  Detecções nesta etapa
                </p>
                <p
                  className="min-w-full relative shrink-0 text-[#19212b] text-[19px] w-[min-content]"
                  data-node-id="2:1289"
                >
                  00
                </p>
                <p
                  className="min-w-full relative shrink-0 text-[#626e7d] text-[11px] w-[min-content]"
                  data-node-id="2:1290"
                >
                  Nenhum registro de exemplo
                </p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full"
            data-node-id="2:1291"
            data-name="Modelo e comandos"
          >
            <div
              className="bg-white border border-[#dce1e7] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[12px] shrink-0 w-[728px]"
              data-node-id="2:1292"
              data-name="Esquema da esteira"
            >
              <div
                className="content-stretch flex items-center justify-between overflow-clip p-[24px] relative shrink-0 w-full"
                data-node-id="2:1293"
                data-name="Cabeçalho do esquema"
              >
                <div
                  className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[6px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap"
                  data-node-id="2:1294"
                  data-name="Título do esquema"
                >
                  <p
                    className="relative shrink-0 text-[#19212b] text-[16px]"
                    data-node-id="2:1295"
                  >
                    Linha demonstrativa
                  </p>
                  <p
                    className="relative shrink-0 text-[#626e7d] text-[11px]"
                    data-node-id="2:1296"
                  >
                    Vista lateral esquemática · sem escala
                  </p>
                </div>
                <div
                  className="bg-[#eaf0ff] content-stretch flex gap-[6px] items-center overflow-clip px-[10px] py-[6px] relative rounded-[6px] shrink-0"
                  data-node-id="2:1297"
                  data-name="Indicador de estado"
                >
                  <div
                    className="relative shrink-0 size-[6px]"
                    data-node-id="2:1298"
                    data-name="Indicador"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgIndicador}
                    />
                  </div>
                  <p
                    className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#225fdb] text-[11px] whitespace-nowrap"
                    data-node-id="2:1299"
                  >
                    Pronta para iniciar
                  </p>
                </div>
              </div>
              <div
                className="bg-[#f7f9fb] h-[330px] overflow-clip relative rounded-[6px] shrink-0 w-[680px]"
                data-node-id="2:1300"
                data-name="Diagrama técnico"
              >
                <div
                  className="absolute bg-[#eaf0f4] h-px left-0 top-[310px] w-[680px]"
                  data-node-id="2:1344"
                  data-name="Guia técnica"
                />
                <div
                  className="absolute bg-[#eaf0f4] h-px left-0 top-[230px] w-[680px]"
                  data-node-id="2:1343"
                  data-name="Guia técnica"
                />
                <div
                  className="absolute bg-[#eaf0f4] h-px left-0 top-[150px] w-[680px]"
                  data-node-id="2:1342"
                  data-name="Guia técnica"
                />
                <div
                  className="absolute bg-[#eaf0f4] h-px left-0 top-[70px] w-[680px]"
                  data-node-id="2:1341"
                  data-name="Guia técnica"
                />
                <div
                  className="absolute bg-[#eaf0f4] h-[330px] left-[630px] top-0 w-px"
                  data-node-id="2:1340"
                  data-name="Guia técnica"
                />
                <div
                  className="absolute bg-[#eaf0f4] h-[330px] left-[550px] top-0 w-px"
                  data-node-id="2:1339"
                  data-name="Guia técnica"
                />
                <div
                  className="absolute bg-[#eaf0f4] h-[330px] left-[470px] top-0 w-px"
                  data-node-id="2:1338"
                  data-name="Guia técnica"
                />
                <div
                  className="absolute bg-[#eaf0f4] h-[330px] left-[390px] top-0 w-px"
                  data-node-id="2:1337"
                  data-name="Guia técnica"
                />
                <div
                  className="absolute bg-[#eaf0f4] h-[330px] left-[310px] top-0 w-px"
                  data-node-id="2:1336"
                  data-name="Guia técnica"
                />
                <div
                  className="absolute bg-[#eaf0f4] h-[330px] left-[230px] top-0 w-px"
                  data-node-id="2:1335"
                  data-name="Guia técnica"
                />
                <div
                  className="absolute bg-[#eaf0f4] h-[330px] left-[150px] top-0 w-px"
                  data-node-id="2:1334"
                  data-name="Guia técnica"
                />
                <div
                  className="absolute bg-[#eaf0f4] h-[330px] left-[70px] top-0 w-px"
                  data-node-id="2:1333"
                  data-name="Guia técnica"
                />
                <div
                  className="absolute h-[8px] left-[399px] top-[285px] w-[42px]"
                  data-node-id="2:1332"
                  data-name="Seta de movimento"
                >
                  <div className="absolute inset-[-6.4%_-2.51%_-6.4%_0]">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={imgSetaDeMovimento}
                    />
                  </div>
                </div>
                <p
                  className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[277px] not-italic text-[#626e7d] text-[10px] top-[283px] whitespace-nowrap"
                  data-node-id="2:1331"
                >
                  SENTIDO DA ESTEIRA
                </p>
                <div
                  className="absolute h-[22px] left-[441px] top-[172px] w-[20px]"
                  data-node-id="2:1330"
                  data-name="Chamada do material"
                >
                  <div className="absolute inset-[-1.53%_-1.85%]">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={imgChamadaDoMaterial}
                    />
                  </div>
                </div>
                <p
                  className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[468px] not-italic text-[#626e7d] text-[11px] top-[165px] whitespace-nowrap"
                  data-node-id="2:1329"
                >
                  Longo e grosso
                </p>
                <p
                  className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[468px] not-italic text-[#19212b] text-[12px] top-[145px] w-[190px]"
                  data-node-id="2:1328"
                >
                  Fio de elástico
                </p>
                <div
                  className="absolute bg-[#7d8997] h-px left-[205px] top-[65px] w-[76px]"
                  data-node-id="2:1327"
                  data-name="Chamada da câmera"
                />
                <p
                  className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[normal] left-[50px] not-italic text-[#626e7d] text-[10px] top-[62px] whitespace-nowrap"
                  data-node-id="2:1326"
                >
                  Representação virtual
                </p>
                <p
                  className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[50px] not-italic text-[#19212b] text-[12px] top-[42px] w-[190px]"
                  data-node-id="2:1325"
                >
                  Câmera industrial
                </p>
                <div
                  className="absolute h-[109px] left-[233px] top-[109px] w-[188px]"
                  data-node-id="2:1324"
                  data-name="Campo visual ilustrativo"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgCampoVisualIlustrativo}
                  />
                </div>
                <div
                  className="absolute bg-[#7d8997] h-[10px] left-[322px] top-[25px] w-[95px]"
                  data-node-id="2:1323"
                  data-name="Braço de fixação"
                />
                <div
                  className="absolute bg-[#7d8997] h-[185px] left-[407px] top-[25px] w-[10px]"
                  data-node-id="2:1322"
                  data-name="Suporte da câmera"
                />
                <div
                  className="absolute bg-[#28323f] h-[5px] left-[512px] top-[298px] w-[42px]"
                  data-node-id="2:1321"
                  data-name="Base de apoio"
                />
                <div
                  className="absolute bg-[#28323f] h-[5px] left-[129px] top-[298px] w-[42px]"
                  data-node-id="2:1320"
                  data-name="Base de apoio"
                />
                <div
                  className="absolute bg-[#7d8997] h-[51px] left-[526px] top-[250px] w-[13px]"
                  data-node-id="2:1319"
                  data-name="Pé da esteira"
                />
                <div
                  className="absolute bg-[#7d8997] h-[51px] left-[143px] top-[250px] w-[13px]"
                  data-node-id="2:1318"
                  data-name="Pé da esteira"
                />
                <div
                  className="absolute bg-[#28323f] h-[45px] left-[85px] rounded-[23px] top-[220px] w-[510px]"
                  data-node-id="2:1317"
                  data-name="Esteira transportadora"
                />
                <div
                  className="absolute bg-[#414c5a] h-[31px] left-[92px] rounded-[17px] top-[227px] w-[496px]"
                  data-node-id="2:1316"
                  data-name="Correia"
                />
                <div
                  className="absolute h-[26px] left-[199px] top-[192px] w-[247px]"
                  data-node-id="2:1315"
                  data-name="Fio de elástico longo e grosso"
                >
                  <div className="absolute inset-[-15.38%_-1.62%_-15.39%_-1.62%]">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={imgFioDeElasticoLongoEGrosso}
                    />
                  </div>
                </div>
                <div
                  className="absolute left-[568px] size-[19px] top-[233px]"
                  data-node-id="2:1314"
                  data-name="Rolete"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgRolete}
                  />
                </div>
                <div
                  className="absolute left-[546px] size-[19px] top-[233px]"
                  data-node-id="2:1313"
                  data-name="Rolete"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgRolete}
                  />
                </div>
                <div
                  className="absolute left-[484px] size-[19px] top-[233px]"
                  data-node-id="2:1312"
                  data-name="Rolete"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgRolete}
                  />
                </div>
                <div
                  className="absolute left-[422px] size-[19px] top-[233px]"
                  data-node-id="2:1311"
                  data-name="Rolete"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgRolete}
                  />
                </div>
                <div
                  className="absolute left-[360px] size-[19px] top-[233px]"
                  data-node-id="2:1310"
                  data-name="Rolete"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgRolete}
                  />
                </div>
                <div
                  className="absolute left-[298px] size-[19px] top-[233px]"
                  data-node-id="2:1309"
                  data-name="Rolete"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgRolete}
                  />
                </div>
                <div
                  className="absolute left-[236px] size-[19px] top-[233px]"
                  data-node-id="2:1308"
                  data-name="Rolete"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgRolete}
                  />
                </div>
                <div
                  className="absolute left-[174px] size-[19px] top-[233px]"
                  data-node-id="2:1307"
                  data-name="Rolete"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgRolete}
                  />
                </div>
                <div
                  className="absolute left-[112px] size-[19px] top-[233px]"
                  data-node-id="2:1306"
                  data-name="Rolete"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgRolete}
                  />
                </div>
                <div
                  className="absolute bg-[#19212b] h-[18px] left-[313px] rounded-[3px] top-[87px] w-[29px]"
                  data-node-id="2:1305"
                  data-name="Lente"
                />
                <div
                  className="absolute bg-[#28323f] h-[47px] left-[295px] rounded-[6px] top-[43px] w-[65px]"
                  data-node-id="2:1304"
                  data-name="Câmera industrial"
                />
                <div
                  className="absolute bg-[#225fdb] h-[5px] left-[318px] rounded-[2px] top-[100px] w-[19px]"
                  data-node-id="2:1303"
                  data-name="Vidro da lente"
                />
                <div
                  className="absolute left-[344px] size-[6px] top-[53px]"
                  data-node-id="2:1302"
                  data-name="Indicador virtual"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgIndicadorVirtual}
                  />
                </div>
                <div
                  className="absolute bg-[#7d8997] h-[6px] left-[305px] rounded-[2px] top-[52px] w-[25px]"
                  data-node-id="2:1301"
                  data-name="Detalhe da câmera"
                />
              </div>
              <div
                className="content-stretch flex gap-[24px] items-center overflow-clip p-[24px] relative shrink-0 w-full"
                data-node-id="2:1345"
                data-name="Legenda do esquema"
              >
                <div
                  className="content-stretch flex gap-[7px] items-center overflow-clip relative shrink-0"
                  data-node-id="2:1346"
                  data-name="Campo ilustrado"
                >
                  <div
                    className="bg-[#eaf0ff] border border-[#225fdb] border-solid relative shrink-0 size-[10px]"
                    data-node-id="2:1347"
                    data-name="Marcador"
                  />
                  <p
                    className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#626e7d] text-[11px] whitespace-nowrap"
                    data-node-id="2:1348"
                  >
                    Campo visual ilustrativo
                  </p>
                </div>
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#626e7d] text-[11px] whitespace-nowrap"
                  data-node-id="2:1349"
                >
                  Material: Fio de elástico — longo e grosso
                </p>
              </div>
            </div>
            <div
              className="bg-white border border-[#dce1e7] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-[481px] min-w-px overflow-clip p-[24px] relative rounded-[12px]"
              data-node-id="2:1350"
              data-name="Controles da simulação"
            >
              <div
                className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[8px] items-start not-italic overflow-clip relative shrink-0 w-full"
                data-node-id="2:1351"
                data-name="Apresentação dos controles"
              >
                <p
                  className="leading-[normal] relative shrink-0 text-[#19212b] text-[16px] whitespace-nowrap"
                  data-node-id="2:1352"
                >
                  Controle da demonstração
                </p>
                <p
                  className="leading-[1.6] min-w-full relative shrink-0 text-[#626e7d] text-[12px] w-[min-content]"
                  data-node-id="2:1353"
                >
                  O escaneamento é apenas ilustrativo. A próxima etapa mostra o
                  elástico sobre a esteira.
                </p>
              </div>
              <div
                className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full"
                data-node-id="2:1354"
                data-name="Ações de início"
              >
                <div
                  className="bg-[#225fdb] border border-[#225fdb] border-solid content-stretch flex gap-[10px] h-[46px] items-center justify-center overflow-clip relative rounded-[6px] shrink-0 w-full"
                  data-node-id="2:1355"
                  data-name="Controle demonstrativo"
                >
                  <div
                    className="relative shrink-0 size-[18px]"
                    data-node-id="2:1728"
                    data-name="play"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgPlay}
                    />
                  </div>
                  <p
                    className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap"
                    data-node-id="2:1357"
                  >
                    Iniciar escaneamento
                  </p>
                </div>
                <div
                  className="bg-[#f2f4f6] border border-[#dce1e7] border-solid content-stretch flex gap-[10px] h-[46px] items-center justify-center overflow-clip relative rounded-[6px] shrink-0 w-full"
                  data-node-id="2:1358"
                  data-name="Controle demonstrativo"
                >
                  <div
                    className="relative shrink-0 size-[18px]"
                    data-node-id="2:1731"
                    data-name="square"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgSquare}
                    />
                  </div>
                  <p
                    className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#9aa5b3] text-[13px] whitespace-nowrap"
                    data-node-id="2:1360"
                  >
                    Parar simulação
                  </p>
                </div>
              </div>
              <div
                className="bg-[#dce1e7] h-px relative shrink-0 w-full"
                data-node-id="2:1361"
                data-name="Divisor"
              />
              <div
                className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full"
                data-node-id="2:1362"
                data-name="Acesso aos registros"
              >
                <p
                  className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.6] not-italic relative shrink-0 text-[#626e7d] text-[12px] w-full"
                  data-node-id="2:1363"
                >
                  As ocorrências de exemplo ficam disponíveis na etapa de
                  histórico.
                </p>
                <div
                  className="bg-white border border-[#dce1e7] border-solid content-stretch flex gap-[10px] h-[46px] items-center justify-center overflow-clip relative rounded-[6px] shrink-0 w-full"
                  data-node-id="2:1364"
                  data-name="Controle demonstrativo"
                >
                  <div
                    className="relative shrink-0 size-[18px]"
                    data-node-id="2:1734"
                    data-name="history"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgHistory1}
                    />
                  </div>
                  <p
                    className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#19212b] text-[13px] whitespace-nowrap"
                    data-node-id="2:1366"
                  >
                    Consultar histórico
                  </p>
                </div>
              </div>
              <div
                className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-full"
                data-node-id="2:1367"
                data-name="Aviso dos controles"
              >
                <div
                  className="relative shrink-0 size-[15px]"
                  data-node-id="2:1737"
                  data-name="mouse-pointer-2"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgMousePointer2}
                  />
                </div>
                <p
                  className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[#626e7d] text-[11px]"
                  data-node-id="2:1369"
                >
                  Controles visuais, sem ações nesta versão estática.
                </p>
              </div>
            </div>
          </div>
          <div
            className="bg-white border border-[#dce1e7] border-solid content-stretch flex gap-[24px] items-start overflow-clip p-[22px] relative rounded-[12px] shrink-0 w-full"
            data-node-id="2:1370"
            data-name="Etapas da demonstração"
          >
            <div
              className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative"
              data-node-id="2:1371"
              data-name="Etapa"
            >
              <div
                className="bg-[#225fdb] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[32px]"
                data-node-id="2:1372"
                data-name="Indicador de etapa"
              >
                <p
                  className="[word-break:break-word] font-['IBM_Plex_Mono:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap"
                  data-node-id="2:1373"
                >
                  01
                </p>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-[5px] items-start leading-[normal] min-w-px not-italic overflow-clip relative"
                data-node-id="2:1374"
                data-name="Descrição da etapa"
              >
                <p
                  className="relative shrink-0 text-[#19212b] text-[12px] whitespace-nowrap"
                  data-node-id="2:1375"
                >
                  Preparar
                </p>
                <p
                  className="min-w-full relative shrink-0 text-[#626e7d] text-[11px] w-[min-content]"
                  data-node-id="2:1376"
                >
                  Esteira pausada e modelo pronto.
                </p>
              </div>
            </div>
            <div
              className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative"
              data-node-id="2:1377"
              data-name="Etapa"
            >
              <div
                className="bg-[#f2f4f6] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[32px]"
                data-node-id="2:1378"
                data-name="Indicador de etapa"
              >
                <p
                  className="[word-break:break-word] font-['IBM_Plex_Mono:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[#626e7d] text-[12px] whitespace-nowrap"
                  data-node-id="2:1379"
                >
                  02
                </p>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-[5px] items-start leading-[normal] min-w-px not-italic overflow-clip relative"
                data-node-id="2:1380"
                data-name="Descrição da etapa"
              >
                <p
                  className="relative shrink-0 text-[#19212b] text-[12px] whitespace-nowrap"
                  data-node-id="2:1381"
                >
                  Identificar
                </p>
                <p
                  className="min-w-full relative shrink-0 text-[#626e7d] text-[11px] w-[min-content]"
                  data-node-id="2:1382"
                >
                  Elástico destacado no esquema.
                </p>
              </div>
            </div>
            <div
              className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px overflow-clip relative"
              data-node-id="2:1383"
              data-name="Etapa"
            >
              <div
                className="bg-[#f2f4f6] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[32px]"
                data-node-id="2:1384"
                data-name="Indicador de etapa"
              >
                <p
                  className="[word-break:break-word] font-['IBM_Plex_Mono:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[#626e7d] text-[12px] whitespace-nowrap"
                  data-node-id="2:1385"
                >
                  03
                </p>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal gap-[5px] items-start leading-[normal] min-w-px not-italic overflow-clip relative"
                data-node-id="2:1386"
                data-name="Descrição da etapa"
              >
                <p
                  className="relative shrink-0 text-[#19212b] text-[12px] whitespace-nowrap"
                  data-node-id="2:1387"
                >
                  Separar e consultar
                </p>
                <p
                  className="min-w-full relative shrink-0 text-[#626e7d] text-[11px] w-[min-content]"
                  data-node-id="2:1388"
                >
                  Ocorrência de exemplo no histórico.
                </p>
              </div>
            </div>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex font-['Inter:Regular'] font-normal items-start justify-between leading-[normal] not-italic overflow-clip pt-[2px] relative shrink-0 text-[#626e7d] text-[11px] w-full whitespace-nowrap"
            data-node-id="2:1389"
            data-name="Rodapé do conteúdo"
          >
            <p className="relative shrink-0" data-node-id="2:1390">
              Projeto escolar · Todos os estados e registros são ilustrativos.
            </p>
            <p className="relative shrink-0" data-node-id="2:1391">
              Visualização estática
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
