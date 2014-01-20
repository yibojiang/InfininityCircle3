Shader "CarReflective/Fresnel 3 Tones Side color-blend" {
Properties {
 _Color ("Base Color 1", Color) = (1,1,1,1)
 _Color_1 ("Tone 1", Color) = (1,1,1,1)
 _Color_2 ("Tone 2", Color) = (1,1,1,1)
 _Color_A ("New Base Color", Color) = (1,1,1,1)
 _Color_A1 ("New Tone 1", Color) = (1,1,1,1)
 _Color_A2 ("New Tone 2", Color) = (1,1,1,1)
 _Lerp ("Lerp", Range(0,1)) = 0
 _Penumbra ("Penumbra", Float) = 0.5
 _zMax ("ZMax", Float) = 4
 _zMin ("ZMin", Float) = -4
 _CubeMapLerp ("CubeMap Lerp", Range(0,1)) = 0
 _Cube ("Cubemap 1", CUBE) = "" {}
 _Cube_01 ("Cubemap 2", CUBE) = "" {}
 _Reflection ("Reflection", Float) = 1
 _Gloss ("Gloss", Float) = -1
 _Kr ("Reflection Max", Float) = 1
 _KrMin ("Reflection Min", Float) = 0.05
 _FresnelExpon ("Fresnel Exponent", Float) = 3
 _FresnelPower ("Fresnel Power", Float) = 3
}
SubShader { 
 LOD 200
 Tags { "RenderType"="Opaque" }
 Pass {
  Name "FORWARD"
  Tags { "LIGHTMODE"="ForwardBase" "RenderType"="Opaque" }
Program "vp" {
SubProgram "opengl " {
Keywords { "DIRECTIONAL" "SHADOWS_OFF" "LIGHTMAP_OFF" }
Bind "vertex" Vertex
Bind "normal" Normal
Matrix 5 [_Object2World]
Matrix 9 [_World2Object]
Vector 13 [unity_Scale]
Vector 14 [_WorldSpaceCameraPos]
Vector 15 [unity_SHAr]
Vector 16 [unity_SHAg]
Vector 17 [unity_SHAb]
Vector 18 [unity_SHBr]
Vector 19 [unity_SHBg]
Vector 20 [unity_SHBb]
Vector 21 [unity_SHC]
Float 22 [_Lerp]
Float 23 [_Kr]
Float 24 [_KrMin]
Float 25 [_FresnelExpon]
Float 26 [_FresnelPower]
Float 27 [_Penumbra]
Float 28 [_zMax]
Float 29 [_zMin]
"!!ARBvp1.0
# 76 ALU
PARAM c[30] = { { 1, 2, -1 },
  state.matrix.mvp,
  program.local[5..29] };
TEMP R0;
TEMP R1;
TEMP R2;
TEMP R3;
TEMP R4;
MUL R0.xyz, vertex.normal, c[13].w;
DP3 R4.x, R0, c[6];
DP3 R3.w, R0, c[7];
DP3 R2.w, R0, c[5];
MOV R2.x, R4;
MOV R2.y, R3.w;
MOV R2.z, c[0].x;
MUL R0, R2.wxyy, R2.xyyw;
DP4 R1.z, R2.wxyz, c[17];
DP4 R1.y, R2.wxyz, c[16];
DP4 R1.x, R2.wxyz, c[15];
DP4 R2.z, R0, c[20];
DP4 R2.y, R0, c[19];
DP4 R2.x, R0, c[18];
MUL R3.x, R4, R4;
ADD R1.xyz, R1, R2;
MAD R0.x, R2.w, R2.w, -R3;
MUL R2.xyz, R0.x, c[21];
MOV R0.w, c[0].x;
MOV R0.xyz, c[14];
DP4 R3.z, R0, c[11];
DP4 R3.x, R0, c[9];
DP4 R3.y, R0, c[10];
DP3 R0.w, vertex.normal, vertex.normal;
MAD R0.xyz, R3, c[13].w, -vertex.position;
ADD result.texcoord[5].xyz, R1, R2;
DP3 R1.x, R0, R0;
RSQ R1.x, R1.x;
MUL R1.xyz, R1.x, R0;
RSQ R0.w, R0.w;
MUL R0.xyz, R0.w, vertex.normal;
DP3 R0.w, R0, R1;
MUL R2.xyz, R0, c[0].y;
MAD R2.xyz, -R2, R0.w, R1;
MOV result.texcoord[1].xyz, R1;
ABS R0.w, R0;
ADD R0.w, -R0, c[0].x;
POW R1.y, R0.w, c[25].x;
MOV R0.w, c[29].x;
ADD R1.z, -R0.w, c[28].x;
MOV R0.w, c[0].x;
MOV R1.x, c[24];
ADD R0.w, R0, -c[22].x;
ABS R1.z, R1;
MAD R1.z, R0.w, R1, c[29].x;
ADD R0.w, -R1.x, c[23].x;
MAD R1.x, R0.w, R1.y, c[24];
ADD R0.w, R1.z, -c[27].x;
MUL result.texcoord[2].w, R1.x, c[26].x;
SLT R1.x, vertex.position.z, R0.w;
ADD R1.y, R1.z, c[27].x;
MAD R1.z, -R1.w, R1.x, R1.w;
MAD R1.w, R1.x, c[0].z, c[0].x;
MOV result.texcoord[2].xyz, -R2;
SLT R2.x, R1.y, vertex.position.z;
ADD R1.y, -R0.w, R1;
ABS R1.y, R1;
ADD R0.w, vertex.position.z, -R0;
MUL R2.x, R1.w, R2;
ADD R1.x, -R1.z, c[0];
MAD R1.x, R1, R2, R1.z;
MAD R1.z, R2.x, -R1.w, R1.w;
MUL R1.z, R1.w, R1;
RCP R1.y, R1.y;
ABS R0.w, R0;
MUL R0.w, R0, R1.y;
ADD R0.w, R0, -R1.x;
MAD result.texcoord[3].x, R0.w, R1.z, R1;
MOV result.texcoord[0].xyz, R0;
MOV result.texcoord[4].z, R3.w;
MOV result.texcoord[4].y, R4.x;
MOV result.texcoord[4].x, R2.w;
DP4 result.position.w, vertex.position, c[4];
DP4 result.position.z, vertex.position, c[3];
DP4 result.position.y, vertex.position, c[2];
DP4 result.position.x, vertex.position, c[1];
END
# 76 instructions, 5 R-regs
"
}
SubProgram "d3d9 " {
Keywords { "DIRECTIONAL" "SHADOWS_OFF" "LIGHTMAP_OFF" }
Bind "vertex" Vertex
Bind "normal" Normal
Matrix 0 [glstate_matrix_mvp]
Matrix 4 [_Object2World]
Matrix 8 [_World2Object]
Vector 12 [unity_Scale]
Vector 13 [_WorldSpaceCameraPos]
Vector 14 [unity_SHAr]
Vector 15 [unity_SHAg]
Vector 16 [unity_SHAb]
Vector 17 [unity_SHBr]
Vector 18 [unity_SHBg]
Vector 19 [unity_SHBb]
Vector 20 [unity_SHC]
Float 21 [_Lerp]
Float 22 [_Kr]
Float 23 [_KrMin]
Float 24 [_FresnelExpon]
Float 25 [_FresnelPower]
Float 26 [_Penumbra]
Float 27 [_zMax]
Float 28 [_zMin]
"vs_2_0
; 92 ALU
def c29, 1.00000000, 2.00000000, 0.00000000, 0
dcl_position0 v0
dcl_normal0 v1
mov r2.w, c29.x
mov r2.xyz, c13
dp4 r0.z, r2, c10
dp4 r0.x, r2, c8
dp4 r0.y, r2, c9
mul r2.xyz, v1, c12.w
mad r1.xyz, r0, c12.w, -v0
dp3 r3.w, r2, c6
dp3 r0.w, r2, c4
dp3 r4.w, r2, c5
dp3 r0.x, r1, r1
rsq r4.x, r0.x
mov r0.x, r4.w
mov r0.y, r3.w
mov r0.z, c29.x
mul r2, r0.wxyy, r0.xyyw
dp4 r3.z, r0.wxyz, c16
dp4 r3.y, r0.wxyz, c15
dp4 r3.x, r0.wxyz, c14
dp4 r0.z, r2, c19
dp4 r0.x, r2, c17
dp4 r0.y, r2, c18
add r3.xyz, r3, r0
mul r2.xyz, r4.x, r1
dp3 r0.x, v1, v1
rsq r0.x, r0.x
mul r1.xyz, r0.x, v1
mul r0.y, r4.w, r4.w
mad r0.y, r0.w, r0.w, -r0
mul r4.xyz, r0.y, c20
dp3 r2.w, r1, r2
mul r0.xyz, r1, c29.y
mad r0.xyz, -r0, r2.w, r2
mov oT2.xyz, -r0
mov r0.x, c27
add r0.y, -c28.x, r0.x
mov r0.x, c21
abs r0.y, r0
add r0.x, c29, -r0
add oT5.xyz, r3, r4
mad r3.x, r0, r0.y, c28
abs r0.y, r2.w
add r0.x, r3, -c26
add r0.z, -r0.y, c29.x
mov oT1.xyz, r2
pow r2, r0.z, c24.x
slt r0.y, v0.z, r0.x
add r0.z, r3.x, c26.x
max r2.y, -r0, r0
slt r2.z, r0, v0
add r0.z, -r0.x, r0
slt r2.y, c29.z, r2
add r2.y, -r2, c29.x
mul r2.z, r2.y, r2
mov r2.w, r2.x
max r3.x, -r2.z, r2.z
slt r3.x, c29.z, r3
mov r2.x, c22
add r2.x, -c23, r2
mad r2.x, r2, r2.w, c23
add r3.x, -r3, c29
abs r0.z, r0
add r0.x, v0.z, -r0
mul r2.w, r2.y, r3.x
mul oT2.w, r2.x, c25.x
mul r2.x, r2.y, r2.w
max r2.y, -r0, r0
max r0.y, -r2.x, r2.x
slt r2.y, c29.z, r2
max r2.x, -r2.z, r2.z
add r2.y, -r2, c29.x
slt r2.x, c29.z, r2
mul r2.y, r2, r1.w
add r1.w, -r2.x, c29.x
mad r2.x, r1.w, r2.y, r2
slt r0.y, c29.z, r0
add r1.w, -r0.y, c29.x
mul r1.w, r1, r2.x
rcp r0.z, r0.z
abs r0.x, r0
mul r0.x, r0, r0.z
mad oT3.x, r0.y, r0, r1.w
mov oT0.xyz, r1
mov oT4.z, r3.w
mov oT4.y, r4.w
mov oT4.x, r0.w
dp4 oPos.w, v0, c3
dp4 oPos.z, v0, c2
dp4 oPos.y, v0, c1
dp4 oPos.x, v0, c0
"
}}}}
Fallback "Diffuse"
}