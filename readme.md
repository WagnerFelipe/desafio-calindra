POST /api/calindra/distancia HTTP/1.1
Host: localhost:4000
Content-Type: application/json
cache-control: no-cache
Postman-Token: d5d04032-7e30-4143-b97e-48b518c9e7fb
{
	"enderecos": ["Rua da Auvernia, 286, Taúa, Ilha do Governador, Rio de Janeiro, 21920170", "Rua Paula Brito, 792, Andaraí, Rio de Janeiro, 20541195", "Rua Leopoldo, 907, Andaraí, Rio de Janeiro, 20541170", "Rua do Bispo, 83, Rio Comprido, Rio de Janeiro, 20261063"]
}------WebKitFormBoundary7MA4YWxkTrZu0gW--


---RESPOSTA---
{
    "distancias": [
        {
            "endereco": "Rua Auvernia, 286 - Tauá, Rio de Janeiro - RJ, 21920-170, Brazil",
            "distancias": [
                {
                    "endereco": "R. do Bpo., 83 - Rio Comprido, Rio de Janeiro - RJ, 20261-063, Brazil",
                    "distancia": 14.112259649836147
                },
                {
                    "endereco": "R. Paula Brito, 792 - Andaraí, Rio de Janeiro - RJ, 20541-195, Brazil",
                    "distancia": 15.96385400108324
                },
                {
                    "endereco": "R. Leopoldo, 907 - Andaraí, Rio de Janeiro - RJ, 20541-170, Brazil",
                    "distancia": 15.990565943790571
                }
            ]
        },
        {
            "endereco": "R. Paula Brito, 792 - Andaraí, Rio de Janeiro - RJ, 20541-195, Brazil",
            "distancias": [
                {
                    "endereco": "R. Leopoldo, 907 - Andaraí, Rio de Janeiro - RJ, 20541-170, Brazil",
                    "distancia": 0.19223682437636794
                },
                {
                    "endereco": "R. do Bpo., 83 - Rio Comprido, Rio de Janeiro - RJ, 20261-063, Brazil",
                    "distancia": 4.572675648618679
                },
                {
                    "endereco": "Rua Auvernia, 286 - Tauá, Rio de Janeiro - RJ, 21920-170, Brazil",
                    "distancia": 15.96385400108324
                }
            ]
        },
        {
            "endereco": "R. Leopoldo, 907 - Andaraí, Rio de Janeiro - RJ, 20541-170, Brazil",
            "distancias": [
                {
                    "endereco": "R. Paula Brito, 792 - Andaraí, Rio de Janeiro - RJ, 20541-195, Brazil",
                    "distancia": 0.19223682437636794
                },
                {
                    "endereco": "R. do Bpo., 83 - Rio Comprido, Rio de Janeiro - RJ, 20261-063, Brazil",
                    "distancia": 4.425571234744345
                },
                {
                    "endereco": "Rua Auvernia, 286 - Tauá, Rio de Janeiro - RJ, 21920-170, Brazil",
                    "distancia": 15.990565943790571
                }
            ]
        },
        {
            "endereco": "R. do Bpo., 83 - Rio Comprido, Rio de Janeiro - RJ, 20261-063, Brazil",
            "distancias": [
                {
                    "endereco": "R. Leopoldo, 907 - Andaraí, Rio de Janeiro - RJ, 20541-170, Brazil",
                    "distancia": 4.425571234744345
                },
                {
                    "endereco": "R. Paula Brito, 792 - Andaraí, Rio de Janeiro - RJ, 20541-195, Brazil",
                    "distancia": 4.572675648618679
                },
                {
                    "endereco": "Rua Auvernia, 286 - Tauá, Rio de Janeiro - RJ, 21920-170, Brazil",
                    "distancia": 14.112259649836147
                }
            ]
        }
    ],
    "matriz": [
        {
            "endereco1": "R. Paula Brito, 792 - Andaraí, Rio de Janeiro - RJ, 20541-195, Brazil",
            "endereco2": "R. Leopoldo, 907 - Andaraí, Rio de Janeiro - RJ, 20541-170, Brazil",
            "distancia": 0.19223682437636794
        },
        {
            "endereco1": "R. Leopoldo, 907 - Andaraí, Rio de Janeiro - RJ, 20541-170, Brazil",
            "endereco2": "R. do Bpo., 83 - Rio Comprido, Rio de Janeiro - RJ, 20261-063, Brazil",
            "distancia": 4.425571234744345
        },
        {
            "endereco1": "R. Paula Brito, 792 - Andaraí, Rio de Janeiro - RJ, 20541-195, Brazil",
            "endereco2": "R. do Bpo., 83 - Rio Comprido, Rio de Janeiro - RJ, 20261-063, Brazil",
            "distancia": 4.572675648618679
        },
        {
            "endereco1": "Rua Auvernia, 286 - Tauá, Rio de Janeiro - RJ, 21920-170, Brazil",
            "endereco2": "R. do Bpo., 83 - Rio Comprido, Rio de Janeiro - RJ, 20261-063, Brazil",
            "distancia": 14.112259649836147
        },
        {
            "endereco1": "Rua Auvernia, 286 - Tauá, Rio de Janeiro - RJ, 21920-170, Brazil",
            "endereco2": "R. Paula Brito, 792 - Andaraí, Rio de Janeiro - RJ, 20541-195, Brazil",
            "distancia": 15.96385400108324
        },
        {
            "endereco1": "Rua Auvernia, 286 - Tauá, Rio de Janeiro - RJ, 21920-170, Brazil",
            "endereco2": "R. Leopoldo, 907 - Andaraí, Rio de Janeiro - RJ, 20541-170, Brazil",
            "distancia": 15.990565943790571
        }
    ]
}
